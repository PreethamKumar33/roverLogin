from plugins import loader

cloud_storage_plugin = loader.import_module("cloud_storage_plugin")

from module.tagger import TextTagger

from module import file_handler_factory


class TaggingService:

    def getNer(self, model):
        files = cloud_storage_plugin.getFiles()
        for file in files:
            processor = file_handler_factory.create_file_processor(cloud_storage_plugin.FileHelper.getFileExtenstion(file))
            tagger = TextTagger()
            doc = tagger.get_tagged_document(processor.extract_text(file['Body'].read()), model)
