from flask import Flask, jsonify
import random

from quotes import funny_quotes

app = Flask(__name__)

@app.route("/api/funny")
def serve_funny_quote():
	quotes = funny_quotes()
	nr_of_quotes = len(quotes)
	selected_quotes = quotes[random.randint(0, nr_of_quotes - 1)]
	return jsonify(selected_quotes)

if __name__ == "__main__":
	app.run(debug=True)