from core.nlp.module import loader, tagger
import logging

logging.basicConfig(level=logging.DEBUG)


cloud_storage_plugin = loader.import_module("cloud_storage_plugin")
pdf_processor_plugin = loader.import_module("pdf_processor_plugin")

from typing import Protocol


class FileProcessor(Protocol):

    def extract_text(self, doc): ...


def get_ner(model):
    try:
        files = cloud_storage_plugin.getFiles()
        docs = []
        for file in files:
            docs.append(tagger.get_tagged_document(pdf_processor_plugin.extract_text(file['Body'].read()), model))
        return docs
    except Exception as e:
        logging.error(e)
        return []