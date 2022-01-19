import spacy
import logging

logging.basicConfig(level=logging.DEBUG)


def get_tagged_document(text, model):
    try:
        nlp = spacy.load(model)
        doc = nlp(text)
        return doc
    except OSError as e:
        logging.error(e)
        raise e
