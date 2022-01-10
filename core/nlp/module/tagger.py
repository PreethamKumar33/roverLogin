import spacy

class TextTagger:

    def get_tagged_document(self, text, model):
        nlp = spacy.load(model)
        doc = nlp(text)
        return doc




