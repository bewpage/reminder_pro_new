# Reminder Pro New

## Description
Reminder Pro New is a user-friendly application developed to assist you in managing your tasks and reminders efficiently. 
It integrates with Firebase for user authentication and data storage to ensure your data remains secure and accessible. 
Here's a link of the deployment on gh-pages [live preview](https://bewpage.github.io/Reminder_Pro_new/)

## Features
* User Authentication (Login/Signup/Reset Password) using Firebase Authentication Service.
* Capability to add tasks with specific details including date, time, and assignee.
* Past-due tasks are highlighted with a red border for better visibility.
* Completed tasks are stored in a separate column for easy reference.
* Persistent data storage in Firebase DB.

## Technical Stack
This application is developed using the following technologies:
* React (bootstrapped with create-react-app)
* React Router for routing
* Firebase for data storage and user authentication
* Redux for state management
* MomentJS for handling dates and times
* React-Bootstrap for UI components

## Setup

### Prerequisites
To run this project, you need to have Node.js and npm installed on your machine.

### Installation
1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/bewpage/reminder_rro_new.git
    ```
2. Navigate into the cloned repository.
    ```bash
    cd reminder-pro-new
    ```
3. Install the dependencies using npm.
    ```bash
    npm install
    ```
4. Create a new Firebase project and register your app more details [here](https://firebase.google.com/codelabs/firebase-web#2).

5. In the root of the project, create a `.env` file and fill in the Firebase configuration details:

    ```
    REACT_APP_API_KEY=YOUR_API_KEY
    REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    REACT_APP_DATABASE_URL=YOUR_DATABASE_URL
    REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
    REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    ```

   Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., with your actual Firebase configuration details.

6. Run the application using npm.

    ```bash
    npm start
    ```

   The application should now be running at [http://localhost:3000](http://localhost:3000).

### next things to do:
- Create user teams to assign goals to specific teams.
- Have a feed of signed-in users and assign goals to specific users.

## Usage
After logging in/signing up, you can use the interface to add new reminders. Each task can be assigned a date, time, and an assignee. When the task passes its due time, it is marked with a red border. Completed tasks can be moved to the 'Closed Tasks' column.

## Contributions
Feel free to contribute to Reminder Pro New. All contributions are appreciated.

## License
[MIT License](https://opensource.org/license/mit/)
