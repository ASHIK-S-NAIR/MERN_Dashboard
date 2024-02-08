# Project Name

This is a machine task to build a Dashboard using client side as reactjs, server side as nodejs and database as mongodb.

##Demo

https://merndashboardtask.netlify.app

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v20.9.0)
- npm (v10.1.0)

## Installation

1. Clone the repository:

git clone https://github.com/ASHIK-S-NAIR/MERN_Dashboard.git

2. Navigate to the project directory:

cd your-repo

3. Install dependencies for both client and server:

# Install client dependencies
cd client
npm install

# Install server dependencies

cd ../server
npm install

4. connect to your local mongodb database using an env file. Create an env file inside server and add environment value as:

DATABASE= "mongodb://localhost:27017/mern_dashboard"

5. Start the server:

# From the project root directory
cd server
npm start

6. Connect the client to server using an env file. Create an env file inside client and add environment value as:

REACT_APP_BACKEND = "http://localhost:8000/api/v1"

7. Start the client

# From the project root directory
cd client
npm run dev

8. Open your browser and visit http://localhost:5173 to view the application.
