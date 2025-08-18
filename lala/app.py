from flask import Flask, send_from_directory

app = Flask(__name__)

# Serve index.html (same folder as this app.py)
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

# Serve any other file in the same folder (CSS, JS, etc.)
@app.route("/<path:filename>")
def base_static(filename):
    return send_from_directory(".", filename)

if __name__ == "__main__":
    app.run(debug=True)
