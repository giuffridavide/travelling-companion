# Travelling Companion
Travelling Companion is a web application that allows users to book trips, keep track of their budget, schedule, the cities that they will and may visit. Users can log in to the application and view their upcoming and past trips. The application is built using Python 3, Django framework for the backend, and React for the frontend.

## Running the Application
The project is configured to run using Docker, and can be launched using the following command:

`docker-compose up --build --detach`

Please note that due to errors in the installation of the package dependencies (specifically, scipy), the container build may fail.

As an alternative, you can run the backend using the command:

`python manage.py runserver`

To start the frontend, navigate to the frontend directory and run:

`npm start`
This will start the development server and allow you to view the application in your browser.

Please note that you will need to install the necessary dependencies for the frontend by running npm install in the frontend directory before starting the server.

## Features
- Users can log in to the application from the homepage.
- Once logged in, users are directed to their dashboard, where they can view their upcoming and past trips.
- Clicking on a past trip opens a page that provides a brief description of the trip.
- Clicking on an upcoming trip opens a description page that also allows the user to modify the trip details.
- In the modification feature, suggested cities are generated on-the-fly, including cities that are within 200km of the final destination.

## Backend
The backend of the application is developed using Django and rest-framework for API calls. Simple JWT is used for token authentication. The application only contains one app named "trip" that includes User, Destination, City, and Trip models.

## Frontend
The frontend of the application includes several pages, including Booking, Dashboard, HomePage, Login, PastTripDetails, UpcomingTripDetails, TripsList, and UsersList. Components include DisplayDestination, DisplayTrip, DisplayUser, and Header. The api.js file handles calls to the backend.

## Known Issue
There is a known issue in the application where the login is currently being done through the administrator credentials of the site (the superuser created through Django). Instead, it is recommended to implement a proper registration and login system using tools like Simple JWT. This will ensure that users can securely log in to the application and access their data without relying on the administrator credentials.

It is recommended using the administrator credentials to log in and test the application. Please exercise caution while testing the application and do not share the administrator credentials with others.