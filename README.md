# serverAPI

# Project description

1. The project includes both frontend and backend part. Frontend app created with Create React App.
2. Booking system for the music festival - the app shows only free tickets and updates tickets availability once new ticket is booked
3. API server build with package Express (yarn add express@4.17.1): main aim is access to data base with possibilty of modification
4. Based on  REST (Representation State Transfer) convention where the link includes name of the collection, but the method decides what has to be done
5. Endpoints are grouped and placed in separate files, using express.routrer functionality
6. Tests for endpoints written using Mocha and Chai
7. To guaratee update availability of the tickets in the real time WebSocets were used
8. DataBase created with MongoDB

# To run the project 

`npm start` or `yarn start` in main folder to run backend part -> run on port 8000

`npm start` or `yarn start` in folder "client" to run frontend part -> run on port 3000



# To run the tests for backend 

`yarn test:watch```


# See the project on heroku

https://evening-depths-87320.herokuapp.com/
