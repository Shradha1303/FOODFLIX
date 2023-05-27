# FOODFLIX
----------------------------------------------------------------------------------------------------------------------------------------
This repository contains a CRUD (Create, Read, Update, Delete) application with a login page, item list functionality, image upload feature, and logout functionality. The application is designed to allow users to manage a list of items, including uploading images for each item, while ensuring secure authentication.
 ## Features ##
* **Login Page**: The login page allows users to authenticate themselves before accessing the application's features. It includes input fields for the username and password, along with a submit button.
![image](https://github.com/Shradha1303/FOODFLIX/assets/101780065/7f14d841-7399-46d1-88fa-89af6b28ebcb)
* **Dashboard**: The dashboard serves as the main interface for the CRUD application. It provides options for adding , editing and deleting book details , logout.
    * **Add Food Item**: This functionality allows users to add new food item to the system. It presents a form with input fields for the food name , food type , price and other necessary details. Upon submission, the form validates the inputs and stores the new food item in the MySQL database.
      
      ![image](https://github.com/Shradha1303/FOODFLIX/assets/101780065/0225d634-0063-4d0b-8312-c4efcaf45f1a)

    * **Item List**: The dashboard displays a table or list of existing food item . The dashboard fetches the food details from the MySQL database and displays them in the book list. This ensures that users always have access to the most up-to-date information.
        
        ![image](https://github.com/Shradha1303/FOODFLIX/assets/101780065/6e24abf2-3644-4334-9b6c-ec0c0b9eada9)
        
        Each row typically includes buttons or icons for editing and deleting the respective food item entry.
        
        ![image](https://github.com/Shradha1303/FOODFLIX/assets/101780065/7026e4c7-7f6d-4e06-9b36-9cd1f8c60f59)
        
         Users can upload and associate images with each item.
        
        ![image](https://github.com/Shradha1303/FOODFLIX/assets/101780065/9c0b716e-56fc-4a3f-83b4-3a86d1d2b2d0)

    * **Logout**: Users can securely log out of the application.
## Prerequisites ##
To run this application, you need to have the following:

* Node.js (version >= 10)
* NPM (Node Package Manager) or Yarn
* MYSQL Workbench

## Technologies Used ##

Node.js - A JavaScript runtime environment.
Express.js - A web application framework for Node.js.
MySQL - A SQL database for storing application data.
Multer - A middleware for handling file uploads.
EJS - A simple templating language for generating HTML markup.
MUI - A  React UI framework.
