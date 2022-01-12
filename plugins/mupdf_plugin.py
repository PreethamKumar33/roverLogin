import fitz


def extract_text(self, doc):
    with fitz.open(stream=doc, filetype="pdf") as document:
        text = ""
        for page in document:
            text += page.getText()
        return text
