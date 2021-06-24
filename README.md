# Music Festival App with Booking System

# Project description

This is the full-stack application for the music festival and its booking system - the app shows only free tickets and updates tickets availability once new ticket is booked

# Backend:

- the API server build with package `Express` (yarn add express@4.17.1) with the main aim to access the data base with possibilty of modification
- based on REST (Representation State Transfer) convention where the link includes name of the collection, but the method decides what has to be done
- Endpoints are grouped and placed in separate files, using express.routrer functionality
- Tests for endpoints written using `Mocha` and `Chai`
- To guaratee update availability of the tickets in the real time `WebSocets` were used
- DataBase created with `MongoDB` and `Mongoose`

# Frontend:

- created with `Create React App`,
- applies following technologies:
  - `React-Router` for routing between subpages,
  - `Redux` for the app state management,
  - `Redux-Thunk` for the communication with the API server,
  - `Axios` for sending requests to APi server,

# To run the project

`yarn start` in main folder to run backend part -> run on port the 8000

`yarn start` in folder "client" to run frontend part -> run on the port 3000

# To run the tests for backend

`yarn test:watch`

# See the project on heroku

https://evening-depths-87320.herokuapp.com/
