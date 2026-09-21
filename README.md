# Weather Site Project

A responsive weather application built with **HTML, CSS, and JavaScript** that retrieves weather information from a weather API and displays it in a user-friendly interface.

This project forms part of my software development and cloud computing learning journey. It has also been used to practise **Maven, automated testing, CI/CD, Git/GitHub, and AWS cloud concepts**.

## Features

* Search for weather information
* Retrieve weather data using a weather API
* Display weather information through a simple web interface
* Responsive front-end design
* JavaScript-based API integration
* Automated testing with JUnit
* Maven project configuration
* Continuous Integration using GitHub Actions
* Packaged as a Maven JAR
* Prepared for deployment to AWS

## Technologies Used

* **HTML5** – Structure of the web application
* **CSS3** – Styling and layout
* **JavaScript** – Application logic and API integration
* **Weather API** – Provides weather data
* **Java** – Testing and Maven project support
* **JUnit** – Automated testing
* **Maven** – Build and dependency management
* **Git** – Version control
* **GitHub** – Source code hosting and CI/CD
* **GitHub Actions** – Continuous Integration
* **AWS** – Cloud computing and deployment learning

## Project Structure

```text
Weather-Site-Project/
│
├── .github/
│   ├── modernize/
│   │   └── java-upgrade/
│   │       ├── .gitignore
│   │       └── hooks/
│   │           └── scripts/
│   │               ├── recordToolUse.ps1
│   │               └── recordToolUse.sh
│   │
│   └── workflows/
│       └── ci.yml
│
├── .vscode/
│   └── settings.json
│
├── CSS/
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

> **Note:** The `target/` directory is generated automatically by Maven during the build process and is not part of the source code.

## Prerequisites

Before running the project, make sure the following are installed:

* A modern web browser such as Chrome, Firefox, or Edge
* Python 3 (recommended for running a local web server)
* Java JDK
* Apache Maven
* Git

You can verify the installations using:

```bash
python --version
java --version
mvn --version
git --version
```

## Getting the Project

Clone the repository:

```bash
git clone https://github.com/Cebisile16/Weather-Site-Project
```

Move into the project directory:

```bash
cd Weather-Site-Project
```

## Running the Weather Application

Because the application uses JavaScript and an external weather API, it is recommended to run it through a local web server rather than opening `index.html` directly.

### Option 1: Python HTTP Server

From the project directory, run:

```bash
python -m http.server 8000
```

You should see a message similar to:


Serving HTTP on 0.0.0.0 port 8000

Open your browser and go to:


http://localhost:8000


The Weather Site should now be available locally.

To stop the server, press:


CTRL + C


## Running the Maven Build

This project uses Maven for build and dependency management.

To compile the project and run the tests:

```bash
mvn clean test
```

A successful build should complete without test failures.

To package the project:

```bash
mvn clean package
```

The generated JAR file will be placed inside the `target/` directory.

Example:

```text
target/weather-site-1.0.0.jar
```

## Running the Tests

The automated tests are located under:

```text
src/test/java/com/weatherapp/WeatherSiteTest.java
```

Run the tests with:

```bash
mvn test
```

Maven will compile the test code and execute the JUnit tests.

Test reports are generated under:

```text
target/surefire-reports/
```

## Continuous Integration

The project includes a GitHub Actions workflow:

```text
.github/workflows/ci.yml
```

The workflow is used to automate project checks when changes are pushed to the repository.

This helps ensure that changes can be built and tested consistently rather than relying entirely on manual testing.

## API Configuration

The application retrieves weather information from an external weather API.


## AWS / Cloud Learning

Through the project, I am exploring concepts such as:

* Cloud deployment
* Hosting web applications
* Compute resources
* Application availability
* Build and deployment processes
* Cloud infrastructure
* AWS services
* Continuous Integration and Continuous Deployment concepts

The goal is to take the concepts learned through AWS training and apply them to a real software project rather than learning them only theoretically.

## Development Workflow

A typical development workflow for this project is:


1. Make changes to the application
        ↓
2. Test the application locally
        ↓
3. Run automated tests
        ↓
4. Build the project with Maven
        ↓
5. Commit changes with Git
        ↓
6. Push changes to GitHub
        ↓
7. GitHub Actions runs CI checks
        ↓
8. Deploy / update the application in AWS





## Future Improvements

Possible future improvements include:

* Improve the user interface
* Add more detailed weather information
* Add weather icons
* Add additional locations
* Improve error handling
* Improve automated test coverage
* Improve API key security
* Deploy the application to AWS
* Explore additional AWS services
* Improve the CI/CD pipeline

## Author

*Cebisile Ngubane*

This project is part of my journey as I continue developing my software engineering and cloud computing skills.

### LinkedIn

[View my AWS Cloud Learning Journey on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7507456081623883776/)

## License

This project is intended for educational and learning purposes.
