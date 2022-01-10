from flask import Flask
from module import file_handler_factory
from module.file_handler import PdfFileProcessor


app = Flask(__name__)
import routes

file_handler_factory.register_file_processor("pdf", PdfFileProcessor)