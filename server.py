from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static", template_folder="templates")

# Route für Startseite (index.html in templates/)
@app.route("/")
def index():
    return send_from_directory("templates", "index.html")

# Statische Dateien (JS, CSS, Bilder) aus /static/
@app.route("/static/<path:filename>")
def static_files(filename):
    return send_from_directory("static", filename)

if __name__ == "__main__":
    app.run(debug=True)
