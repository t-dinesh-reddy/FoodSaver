# College Food Saver

## What it does ?

College Food Saver app thrives in reducing food waste from college dining halls by giving students an opportunity to pick free meals from the dining hall. The app has two views: Client and Student Views. Client view can help dining supervisors to post listing of the food items that needs to be picked by a certain date and time. Student view can help students to pick the item from the listing.

This app can save 22+ million pounds of food waste and also helps students in getting free meals.

### How it works ? Tech Stack ?

The app is currently built using <code>React.js</code>, <code>Material-UI Framework</code>, <code>Node.js</code>, <code>Express.js</code>, <code>MongoDB</code>, <code>Firebase</code>, <code>Google Cloud Platform</code>. The frontend of the app is hosted using <code>Firebase Hosting</code> and the backend is hosted on <code>Google App Engine's</code> serveless architecture.

### User Authentication

The app uses Firebase authentication to authenticate users with specific domain (@gsu.edu) to create/signin there accounts. A unique UID is stored as a key in the localStorage of the browser to allow user to access the app across different tabs while logged in to there respective accounts. This unique UID gets expired after every 5 hours and the user needs to login again to ensure the security of the user's data. In addition, every time a new account is created user's data is stored in the Firebase Realtime Database which is used by app.

### Main App

After an user creates an account in the client view the home/metrics page appears which gives some quick weekly and yearly insights using graphical representation. This data can be used by the dining halls to anaylze the data and improve there service by making it widespread. This page also serves as a motivation for the dining hall department as it shows there impact on society for good cause.

The other links are to see the current listing with the food items posted with the items details like fats, carbs, expiry date, etc. Supervisors in the dining hall can add a new item using the add icon. All of the text data related to listings and new orders are stored in Mongo database. Images related to items are stored in the Firebase Storage.

<img width="1440" alt="Screen Shot 2021-08-08 at 1 11 33 PM" src="https://user-images.githubusercontent.com/56787472/128639936-f0ae9ae1-fd7b-483c-81b0-37d75c8ceebe.png">

### Google Cloud Platform's SDK for Cloud Tasks API

To remove the redundancy and improve user experience items in the listing are deleted automatically by the Cloud Tasks API. So every time a new item is created, a new tasks is added to the <code>deletion-process-queue</code> which deletes the item as the clock hits that time. A HTTP DELETE request is sent to the backend serverless Api hosted in Google App Engine which deletes the item from the mongo database.

<img width="1343" alt="Screen Shot 2021-08-07 at 7 40 43 PM" src="https://user-images.githubusercontent.com/56787472/128616367-66f71287-f0d3-46fe-9dc7-2b5544c93486.png">



## Architecture/ WireFrame

<img width="1166" alt="Screen Shot 2021-08-08 at 1 16 28 PM" src="https://user-images.githubusercontent.com/56787472/128640065-d06eda7e-3d75-4989-b31e-e3d6b7a4204f.png">



## Instructions

1. Use ```git clone --branch master https://github.com/ayushbudh/college-food-saver``` or Download button to use the code on your local machine.
2. After the code is downloaded into your local machine run ```npm install``` in your CMP/terminal.
3. Open another terminal or split the terminal and navigate inside the ```/src/backend/``` directory to run ```npm install``` in your CMP/terminal.
4. After the installation is complete run the command ```npm run serve``` inside your /src/backend terminal to start the backend server.
5. Finally run command ```npm start``` within the root of the project to start the local server in port 3000.

Note: You might need to install Node on your local machine if it's already not installed.

## Current Version
client - ``` v1.3 ``` <br>
customer - ``` v1.0 ```

