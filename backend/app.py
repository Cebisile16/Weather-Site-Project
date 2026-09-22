import os

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:8000", "http://localhost:8000"])

weather_api_key = os.getenv("WEATHER_API_KEY")


@app.route("/")
def home():
    if weather_api_key:
        return "Weather API key loaded successfully!"
    return "Weather API key was not found."


@app.route("/api/weather")
def get_weather():
    city = request.args.get("city")

    if not city:
        return jsonify({"error": "City is required"}), 400

    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city,
        "appid": weather_api_key,
        "units": "metric"
    }

    try:
        response = requests.get(url, params=params, timeout=10)

        if response.status_code == 404:
            return jsonify({"error": "City not found"}), 404

        response.raise_for_status()

        return jsonify(response.json())

    except requests.RequestException as error:
        print("Weather API error:", error)
        return jsonify({"error": "Unable to fetch weather data"}), 500


if __name__ == "__main__":
    app.run(debug=True)