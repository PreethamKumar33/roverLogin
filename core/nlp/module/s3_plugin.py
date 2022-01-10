import os

import boto3
from botocore.client import Config

class AwsHelper:
    def getClient(self, name, awsRegion):
        config = Config(retries=dict(max_attempts=30))
        return boto3.client(name, region_name=awsRegion, config=config)


class S3Helper:
    @staticmethod
    def getS3BucketRegion(bucketName):
        client = boto3.client('s3')
        response = client.get_bucket_location(Bucket=bucketName)
        awsRegion = response['LocationConstraint']
        return awsRegion

    @staticmethod
    def getFileNames(awsRegion, bucketName, prefix, maxPages,
                     allowedFileTypes):

        files = []

        currentPage = 1
        hasMoreContent = True
        continuationToken = None

        s3client = AwsHelper().getClient('s3', awsRegion)
        while (hasMoreContent and currentPage <= maxPages):
            if (continuationToken):
                listObjectsResponse = s3client.list_objects_v2(
                    Bucket=bucketName,
                    Prefix=prefix,
                    ContinuationToken=continuationToken)
            else:
                listObjectsResponse = s3client.list_objects_v2(
                    Bucket=bucketName, Prefix=prefix)

            if (listObjectsResponse['IsTruncated']):
                continuationToken = listObjectsResponse[
                    'NextContinuationToken']
            else:
                hasMoreContent = False

            for doc in listObjectsResponse['Contents']:
                docName = doc['Key']
                docExt = FileHelper.getFileExtenstion(docName)
                docExtLower = docExt.lower()
                if (docExtLower in allowedFileTypes):
                    files.append(docName)

        return files

    @staticmethod
    def getFiles(awsRegion, bucket, prefix, maxPages,
                     allowedFileTypes):

        fileNames = S3Helper.getFileNames(awsRegion, bucket, prefix, maxPages,
                                          allowedFileTypes)
        s3client = AwsHelper().getClient('s3', awsRegion)
        files = [s3client.get_object(bucket = bucket, key = fileNames[index]) for file, index in enumerate(fileNames)]
        return files


class FileHelper:
    @staticmethod
    def getFileNameAndExtension(filePath):
        basename = os.path.basename(filePath)
        dn, dext = os.path.splitext(basename)
        return (dn, dext[1:])

    @staticmethod
    def getFileName(fileName):
        basename = os.path.basename(fileName)
        dn, dext = os.path.splitext(basename)
        return dn

    @staticmethod
    def getFileExtenstion(fileName):
        basename = os.path.basename(fileName)
        dn, dext = os.path.splitext(basename)
        return dext[1:]
