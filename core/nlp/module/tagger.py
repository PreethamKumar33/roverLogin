import spacy


def get_tagged_document(text, model):
    nlp = spacy.load(model)
    doc = nlp(text)
    return doc






