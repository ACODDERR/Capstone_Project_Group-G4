# Capstone_Project_Group-G4
CapStone Project: ShopForHome

*In the project we have made an ecommerce website to take ShopForHome business online

We have divided project in two parts for Frontend and Backend

**********************Frontend****************************

In this we have made the UI for the web application


Approach:-

after logging in based in the role of the user he will get access to features of admin and user

Admin role 
	-can perform CRUD operation on USer, products, coupons
 	-can see stocks and sales
User role
	-can see different products
	-can add to cart or wishlist
	-can update cart according to necessity
	-can apply coupons
	-can search for a product with tag
	

**********************Backend*************************
we have made different services on different servers 
-login, logout,register service : port 8080
-Products CRUD : port 8081
-users CRUD : port 8082
-Cart : port 8083 
- wishlist : port 8084
-Discounts or Coupons : port 8085
with the concurrently package we can start all the package at a time with command
npm run dev

Under api-gateway folder we have made gateway for admin, user, app

the working of all the functionalities is explained in the attatched 

the main application will be running through react at port 3000
all other services will run on different ports in the backend with the microservices to keep the application running if any one or more service has some issue , then other services will continue to serve 

# After  extract the zip file this steps are required.

# First install node-modules for both ends.

# Backend

	1. Open new terminal and enter the directory
		- cd Backend (type this in terminal and click Enter)

	2. After enterning the backend directory use this command to install nodemodules
		- npm install
	
	3. After enterning the backend directory use this command to run backend.
		- npm run dev (type this in terminal and click Enter)

# Frontend

	1. Open new terminal and enter the directory
		- cd Frontend (type this in terminal and click Enter)

	2. After enterning the Frontend directory use this command to install nodemodules
		- npm install

	3. After enterning the Frontend directory use this command to run Frontend.
		- npm start (type this in terminal and click Enter)

NOTE:- Both Frontend and Backend run at different terminals and use both at a time.

# For admin register, first copy the below url and paste in postman and use the POST request and pass the json data in body and click send.

to create first id in postman send the following data in the request body using the post request to the url
http://localhost:9000/user/auth/register
and add the detials mentioned below

{
 
"username":"admin1",
"email":"admin@gmail.com",
"password":"password",
"confirmPassword":"password",
"role":"admin"

}

After sending the above json form data the id will be created for admin under which other admin or user ids can be made and user id can be made from UI sign up page also.

After completing this steps now you can access the all the capstone project statement opertaions in application.

