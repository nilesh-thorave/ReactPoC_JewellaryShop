# First React Application

This PoC is created to and demonstrate my ReactJS learnings. It is a simple webapplication developed for Jewellary shop. User can explore variouse Services and Jewellaries available in the shop.

It contains a Loopback server which provides backend apis and a React client application.

## Loopback Server
Server conatines majorly 3 resources Users, Products and Feedback. It uses MongoDB as a datasource.
You can see the server apis by hitting *`/explorer`* path. eg.- "http://localhost:3000/explorer/#/"

### Resources
| Resouece Name  | Description |
| ------------- | ------------- |
| Users  | It is used for user management. Possible operations could be create new user, login , logout etc.  |
| Products  | It is used to manage all the items available in the Jewellary shop.  |
| Feedback  | It is used to store the feedback or comments of the users.  |

### Steps to run the server
To run the server make sure your react client application is build properly and *`client/build`* folder contains index.html and related reources.

1. First install the node_modules using *`npm install`*
2. Run the server using *`npm start`*


## React Client Application
React application is in the *`client`* folder. You can make changes in the application and rebuild it in a *`build`* folder.
This application demostrate the following ReacJs features.
1. JSX
2. Components
    Function component , Class component
3. Component lifecycle methods
4. Data flow
5. Events
6. State and Props
7. Form handling
8. Http requests in React
9. React DOM Router
10. Authentication/ Secure Routes
11. State management with Redux
12. Unite Testing with Jest and React Test Library
13. Test coverage and reports.

To build the cliient application run *`npm run build`* command.

For unit testing run *`npm run test`* command.

For test coverage run *`npm run coverage`* command.

To run the application run server and visit `localhost:3000/`.


