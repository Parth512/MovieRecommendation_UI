# Angular 10 Movie-Recommendation application

## Prerequisite 
- Java
- Node
- MongoDB
- Intellij/eclipse

## How to setup?
- Open databse.db file and run given two query is mongo shell or mongo GUI
- Start spring boot java server
- Start UI application with following commands
    - npm install
    - npm start

## Screenshots

Login
![alt text](https://github.com/Parth512/MovieRecommendation_UI/blob/master/src/assets/login.png?raw=true)
Register
![alt text](https://github.com/Parth512/MovieRecommendation_UI/blob/master/src/assets/registration.png?raw=true)
Creating Watch list while register
![alt text](https://github.com/Parth512/MovieRecommendation_UI/blob/master/src/assets/selectWatchlistWhileSignup.png?raw=true)
Movie recommendation
![alt text](https://github.com/Parth512/MovieRecommendation_UI/blob/master/src/assets/MovieRecommendation.png?raw=true)
All movies
![alt text](https://github.com/Parth512/MovieRecommendation_UI/blob/master/src/assets/allMovies.png?raw=true)

## API Doc

For JWT – Token based Authentication with Web API, we’re gonna call 2 endpoints:
- POST `api/auth/signup` for User Registration
- POST `api/auth/signin` for User Login

For Movie - List all movies (unAuthenticated)
-  GET `/api/auth/movie/list`
  
For history/watchlist - APIS for handling movie watchlist of user and given recommendation geners accordingly
-  GET `/api/history/recommendation` (authenticated)
-  GET `/api/history/getLast10` (authenticated)
-  POST `/api/history/add` (authenticated)
  
 ## Future enhancement

https://api.spacexdata.com/v4/launches/query
filter with success = 
{
    "query": {
        "success": true
    },
    "options": {
        "limit": 100
    }
}


{
    "query": {
        "cores.landing_success": true
    },
    "options": {
        "limit": 100
    }
}

{
    "query": {
        "date_utc": {
            "$gte": "2015-01-01T00:00:00.000Z",
            "$lte": "2015-12-31T00:00:00.000Z"
        }
    }
}

