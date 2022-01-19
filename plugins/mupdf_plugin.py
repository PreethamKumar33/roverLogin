import fitz
import logging

logging.basicConfig(level=logging.DEBUG)


def extract_text(self, doc):
    try:
        with fitz.open(stream=doc, filetype="pdf") as document:
            text = ""
            for page in document:
                text += page.getText()
            return text
    except ValueError as e:
        logging.error(e)
        raise e
