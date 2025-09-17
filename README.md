# Project Documentation

This document will provide information on how to set up and run the project.

## Project Overview
This project is a Gamified STEM Platform, likely a web application built with React for the frontend and Node.js for the backend. It aims to provide an interactive and engaging learning experience for STEM subjects through gamification.

## Setup Instructions

This project consists of two main parts: a client-side (frontend) and a server-side (backend).

### Prerequisites

Make sure you have the following installed:
*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or Yarn

### Client-side Setup

1.  Navigate to the project root directory:
    ```bash
    cd C:\Users\ravur\EduQuest
    ```
2.  Install client-side dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Server-side Setup

1.  Navigate to the server directory:
    ```bash
    cd C:\Users\ravur\EduQuest\server
    ```
2.  Install server-side dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Project

### Client-side

To start the client-side development server:

1.  Navigate to the project root directory:
    ```bash
    cd C:\Users\ravur\EduQuest
    ```
2.  Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
    The client application should open in your browser at `http://localhost:3000` (or another available port).

### Server-side

To start the server-side application:

1.  Navigate to the server directory:
    ```bash
    cd C:\Users\ravur\EduQuest\server
    ```
2.  Start the server:
    ```bash
    node index.js
    # or, if you have `nodemon` installed globally
    nodemon index.js
    ```
    The server will typically run on `http://localhost:5000` (or another configured port).

## Project Structure

The project is organized into two main directories:

*   `C:\Users\ravur\EduQuest\` (Client-side): Contains the React frontend application.
*   `C:\Users\ravur\EduQuest\server\` (Server-side): Contains the Node.js backend application.