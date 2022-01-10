from module.s3_plugin import S3Helper, FileHelper
from module.tagger import TextTagger

from module import file_handler_factory


class TaggingService:

    def getNer(self):
        files = S3Helper.getFiles()
        for file in files:
            processor = file_handler_factory.create_file_processor(FileHelper.getFileExtenstion(file))
            tagger = TextTagger()
            doc = tagger.get_tagged_document(processor.extract_text(file['Body'].read()), "en_core_wb_sm")
