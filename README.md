# CapstoneAxisSaral
AXIS Saral Portal
![AxisSaralLogo-2](https://github.com/nitish39/CapstoneAxisSaral/assets/21340405/e9aa915e-0eb5-4362-bb93-071cbdf4d2ce)

The AXIS Saral Portal is a web application that provides functionalities for employees and admins to manage employee information, projects, stakeholders, and important company documents. It is built using Java 8, MySQL 8, Spring Boot, JPA, Eureka, React JS, Bootstrap, CSS, and HTML.

Table of Contents
Introduction
Features
Technologies Used
Getting Started
Usage
Contributing
License
Introduction
The AXIS Saral Portal is designed to streamline employee-related activities and project management within the organization. It provides a user-friendly interface for both employees and administrators to perform various tasks efficiently.

Features

Admin:
Register new employees with their details.
Update existing employee information, such as contact details, roles, etc.
Deactivate employees who are no longer part of the organization.
Add new projects to the system.
Add new stakeholders to the projects.

Employees:
Access important company documents, including policies and procedures.
View information about other employees, their current projects, managers, email, and phone numbers.
Download essential documents such as appointment letters and increment letters.
Stay updated with recent activities, major project implementations, and organizational initiatives through posts and updates.
Create new posts to share information or updates with other employees.
Provide comments on new or existing posts to engage in discussions.
Access crucial information about live projects, including stakeholders, application owners, module-wise details, support team members, and available job opportunities within each project/team.
Receive email notifications whenever a new post is published.

Technologies Used
Java 8
MySQL 8
Spring Boot
JPA (Java Persistence API)
Eureka (Service Discovery for Microservices)
React JS
Bootstrap
CSS
HTML

Getting Started
Follow these steps to set up the AXIS Saral Portal locally:

Clone the repository to your local machine:
git clone https://github.com/nitish39/Capstone.git

Configure the database:

Install MySQL 8 and create a new database for the project.
Update the database configuration in the application.properties file.

Build and run the backend:

Open a terminal, navigate to the "backend" directory, and run:

./mvnw spring-boot:run

Build and run the frontend:

Open another terminal, navigate to the "frontend" directory, and run:

npm install
npm start
Access the application at http://localhost:3000.

Usage
Once the application is set up and running, employees and admins can log in to access their respective functionalities.

Contributing
We welcome contributions from the community! If you find any issues or want to enhance the project, feel free to create a pull request.
