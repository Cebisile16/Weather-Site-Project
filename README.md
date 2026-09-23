# Weather Site Project

A simple weather application that allows a user to search for a city and view its current weather information.

I started this project as part of my software engineering learning journey. While working on it, I used it to practise JavaScript, APIs, Maven, testing, Git/GitHub, GitHub Actions and AWS.

## Features

* Search for weather information by city
* Display temperature, weather conditions and humidity
* Responsive web interface
* Flask backend for handling weather API requests
* API key stored on the backend
* JUnit tests
* Maven build
* GitHub Actions CI
* Deployed to AWS EC2

## Technologies Used

* HTML
* CSS
* JavaScript
* Python
* Flask
* OpenWeatherMap API
* Java
* JUnit
* Maven
* Git and GitHub
* GitHub Actions
* AWS EC2
* Nginx
* Gunicorn

## Project Structure

```text
Weather-Site-Project/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── src/
│   └── test/
│       └── java/
│           └── com/
│               └── weatherapp/
│                   └── WeatherSiteTest.java
│
├── .gitignore
├── index.html
├── pom.xml
└── README.md
```

The `target/` folder is created by Maven when the project is built and is not part of the source code.

## Prerequisites

You will need:

* Python 3
* Java JDK
* Maven
* Git
* A web browser

You can check your installations with:

```bash
python --version
java --version
mvn --version
git --version
```

## Getting the Project

Clone:

```bash
git clone https://github.com/Cebisile16/Weather-Site-Project.git
```

Then:

```bash
cd Weather-Site-Project
```

## Setting Up the API Key

The Flask backend uses the OpenWeatherMap API.

Create:

`backend/.env`

Add:

`OPENWEATHER_API_KEY=your_api_key_here`

The `.env` file should not be pushed to GitHub.

## Running the Project Locally

The project has a frontend and a Flask backend, so both need to be running.

### 1. Start the backend

```bash
cd backend
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

Install:

```bash
pip install -r requirements.txt
```

Start Flask:

```bash
python app.py
```

Backend:

`http://127.0.0.1:5000`

### 2. Start the frontend

Open a second terminal:

```bash
cd Weather-Site-Project
python -m http.server 8000
```

Open:

`http://localhost:8000`

### 3. Test backend

```bash
curl "http://127.0.0.1:5000/api/weather?city=Johannesburg"
```

## Maven

Run tests:

```bash
mvn test
```

Clean test:

```bash
mvn clean test
```

Package:

```bash
mvn clean package
```

Build files are in `target/`.

## Tests

Test location:

`src/test/java/com/weatherapp/WeatherSiteTest.java`

Run:

```bash
mvn test
```

## GitHub Actions

Workflow:

`.github/workflows/ci.yml`

The workflow builds the project and runs tests when changes are pushed to GitHub.

## AWS Deployment

The application has been deployed to an AWS EC2 instance running Ubuntu.

Setup:

* EC2 – hosts application
* Nginx – serves frontend and forwards API requests
* Gunicorn – runs Flask backend
* systemd – keeps Gunicorn running
* Security Group – allows HTTP port 80

Flow:

Browser → Nginx → Frontend / Flask Backend → OpenWeatherMap API

Frontend is served by Nginx, `/api/` requests go to Flask backend. The API key is kept on the server instead of the frontend JavaScript.

## Deployed Application

App:

`http://54.242.213.226/`

API:

`http://54.242.213.226/api/weather?city=Johannesburg`

Note: The public IP can change if the EC2 instance is stopped and started unless an Elastic IP is configured.

## Development Workflow

Make changes → Test locally → Run Maven tests → Commit → Push to GitHub → GitHub Actions runs → Update AWS deployment

## What I Have Learned

This project has helped me practise:

* JavaScript and APIs
* Flask and Python
* Maven and JUnit
* Git and GitHub
* GitHub Actions
* Linux
* AWS EC2
* Nginx
* Gunicorn
* Environment variables
* Deploying an application to the cloud

I am using this project to take what I learn and actually apply it instead of only doing the theory.

## Future Improvements

* Add weather icons
* Display more weather information
* Add multi-day forecast
* Improve error messages
* Add more tests
* Add HTTPS
* Set up Elastic IP
* Continue improving AWS deployment

## Author

**Cebisile Ngubane**

This project is part of my software engineering and cloud computing learning journey.

### LinkedIn

View my AWS Cloud Learning Journey on LinkedIn:

https://www.linkedin.com/feed/update/urn:li:activity:7507456081623883776/

## License

This project is for educational and learning purposes.
