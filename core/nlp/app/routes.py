from core.nlp.app import app

@app.route("/")
def home():
    return "hello"