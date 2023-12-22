# Assignment 2 - Web API.

Name: Jia Yang

Student Number: 20104736



## Links

1.This repository: https://github.com/Yolanda2002/react-assignment-test2

2.Youtube: https://youtu.be/qtA-Oc8MinM



## Features

+ **JWT Authentication**: Custom user registration and login with JSON Web Tokens (JWT).
  
+ **Favorites Management**: Ability to manage (add/delete) a user's favorite movies list.
  
+ **Login Check for Favorites**: Automated login verification before adding to favorites with redirection to the login page if not authenticated.
  
+ **Post-Login Redirection**: Users are redirected to the homepage after successful login.
  
+ **Real-Time Favorites Update**: Favorites list updates in real-time upon addition or deletion of movies.
  
+ **Session Token Storage**: Authentication tokens are stored for the duration of the session.
  
+ **Secure API Wrapper**: `utils/myFetch` is used for making authenticated API requests, replacing the standard `fetch`.
  
+ **Route Protection**: Client-side protection of certain routes that require user authentication.



## Setup requirements.

I use react-lab-CA as my front-end program and movies-api as my back-end program, attached to mongoDB, tested by postman.



## API Configuration

______________________
REACT_APP_TMDB_KEY=7a804bb586a5329ea60de4014363e5f7

FAST_REFRESH=false

______________________



## API Design

1. **GET /list**
   - Retrieve a list of collections associated with the current user.
2. **POST /add**
   - Add a movie to the user's collection based on the user ID and movie ID provided in the request body.
3. **DELETE /delete**
   - Remove a movie from the user's collection based on the user ID and movie ID provided in the request body.
4. **GET /tmdb/genres**
   - Fetch a list of movie genres from The Movie Database (TMDB) API.
5. **GET /tmdb/upcoming**
   - Retrieve a list of upcoming movies from TMDB API.
6. **GET /**
   - Retrieve a paginated list of movies, along with the total count of movies and the total number of pages.
7. **GET /:id**
   - Get details of a specific movie by its ID.
8. **PUT /:id**
   - Update a user's details based on the user ID provided as a URL parameter and the details provided in the request body.
9. **POST /**
   - Register a new user or authenticate an existing user based on the action specified in the query parameters of the request.




## Security and Authentication

**Authentication implementation:**

- **bcryptjs**：Used in userModel.js for password hashing and comparison. This ensures that user passwords are not stored in plain text in the database, but are securely hashed before being saved.
- **jsonwebtoken (jwt)**： Used to generate and validate tokens, as shown in index.js. This indicates that the token is likely to be used to manage session authentication.

**JWT authentication process:**

1. **User Registration**: When a new user registers, a JWT token is generated after the user is created.
2. **User Login**: Upon login, a JWT token is generated if the credentials are valid.
3. **Token Validation**: The validation middleware is used to validate tokens passed into the Protected Route request.

**Protected Routes：**

- **/api/movies**（POST、DELETE、GET by ID）：These routes require the user to be authenticated because they access or modify user-specific data, such as adding or removing movies from a movie set.
- **/api/playlist**（POST、DELETE、GET）： these endpoints are associated with user-specific playlists
- **/api/favorites** （PUT、GET）： routes to modify and fetch favorite movie lists also require authorization



## Integrating with React App

The following outlines how I've connected the React app to our backend services and the modifications made from Assignment One.

**Functional Enhancements:**

1. **User Registration and Login:**
   - I've implemented a user authentication flow where users can sign up for a new account and log in to access personalized features. The registration and login views now interact with the Web API, ensuring that user credentials are handled securely and session tokens are generated for subsequent authenticated requests.
2. **Favorites Management:**
   - The app allows users to add movies to their favorites, view their favorites list, and remove movies from it. These actions are managed through API endpoints specifically designed for favorites handling. This integration provides a tailored experience for each user, with their preferences stored and managed on the server.

**Interactive Elements:**

1. **Favorites Interaction:**
   - When a user attempts to add a movie to their favorites, the app checks for authentication. If the user is logged in, the movie is successfully added to their favorites. If not, the app redirects them to the login page, fostering a smooth user flow.
2. **Post-Login Redirection:**
   - Upon successful login, users are redirected to the homepage where they can start browsing movies immediately. This provides a user-friendly transition following authentication.
3. **Favorites Deletion and Update:**
   - When a user removes a movie from their favorites, the favorites list is instantly refreshed to reflect this change, offering immediate visual feedback and enhancing the user experience.
4. **Token Management:**
   - Authentication tokens are stored in `sessionStorage`, ensuring that they persist across page reloads but not browser sessions, striking a balance between convenience and security.
5. **Authenticated Requests:**
   - I have abstracted authenticated requests through a utility function `utils/myFetch` which wraps around the native `fetch` call. This utility automatically includes the authentication token, simplifies error handling, and centralizes API request logic.

**Web API Utilization:**

​	The React app leverages my Web API for all features related to user accounts and favorites, deviating from using the TMDB API for these functionalities. Specifically, the views that handle registration, login, favorites addition, listing, and deletion are powered entirely by our Web API.

**React App Updates from Assignment One:**

- The application's state management has been refactored to incorporate global state handling, providing a more efficient and scalable approach to state management across components.
- I've introduced protected routes that require user authentication, ensuring that certain UI elements and navigational paths are accessible only to logged-in users.
- Error handling and user feedback mechanisms have been improved, offering clearer communication to users during their interactions with the application.
- Performance optimizations were carried out, including the implementation of lazy loading for React components, which reduces the initial load time and enhances the app's responsiveness.



## Independent learning 

+ **Session Management with sessionStorage**: I used `sessionStorage` for storing authentication tokens. This web storage feature allows me to keep user session data for the duration of the page session, providing a more secure and user-friendly way to handle session tokens compared to traditional cookies.

+ **Client-Side Routing**: By leveraging React Router, I implemented client-side routing to manage navigation in our single-page application (SPA). This included learning how to handle protected routes and redirects based on user authentication status.

+ **JWT for Authentication**: I utilized JSON Web Tokens (JWT) for authentication, which involved understanding the generation, expiration, and verification of tokens to ensure secure transfer of user credentials and session management.

+ **Custom Fetch Wrapper**: I created a custom fetch wrapper, `utils/myFetch`, to standardize API calls and include JWT in headers. 

+ **Using the @mui UI component library**: Since I wanted to add a login screen, I looked into the mui component to write the login screen more beautifully. In order to improve the efficiency of front-end development and the aesthetics of the user interface, by using @mui, I was able to focus on the functional development of the application instead of spending a lot of time on the design and implementation of basic UI elements.

