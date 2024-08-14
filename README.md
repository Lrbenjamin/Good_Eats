# Good_Eats

# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Application](#deployed-application)
- [Test Instructions](#test-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Questions](#questions)

## Description

A responsive application that makes finding small businesses to support easy. Once logged in, users can leave reviews with business information and browse reviews left by other users. As this app is designed to spotlight non-chain businesses, the user can search by zip code to see relevant reviews, and reviews are sorted using community ratings - no paid promotion here. Users can also subscribe to support these businesses and 100% of all donations collected flow back to the communities they support.

## Technologies Used

Frontend: React, TailwindCSS, Vite.
Backend: Express.js, MongoDB, GraphQL, Apollo Server.
Authentication: bcrypt, JWT.
Deployment: Render.

## Credits

- Caleb Warford (@Rinovi): Tailwind, Vite, React
- Annie Schalnat (@fairybones): Server-side models, schemas, utils
- Logan Benjamin (@Lrbenjamin): Render, Backend, NodeMailer
- Damien Mendoza (@DMendoza013): Seeds, Login Backend, Store Info

## Installation

Please begin by running `npm i` ( Downloads the packages needed to run the website ), `npm run build` ( Sets up vite and makes the styling, also runs npx vite build --debug to see if any errors occur), `npm start` ( Connects to MongoDB ), `npm run seed` ( Seeds data ) from the command line to install necessary packages and modules, then `npm run develop` ( Initializes the website ) to get the application running.

## Usage

First, you could sign in or sign up. 

![Screenshot 2024-08-13 163628](https://github.com/user-attachments/assets/deb52b24-61b6-42bd-9121-68b35b4b9fb8)  

Once you are logged in it takes you to the home screen where you can enter your Zip Code. 

![homepage](https://github.com/user-attachments/assets/eeafa31a-cac5-4144-91b9-6a7581fe2cc7)  

Once entered, we search for family-owned restaurants in your area. 

![Restraunts](https://github.com/user-attachments/assets/3c4a4e82-64b1-4a7c-b38c-49af07d18c90)  

Once you click on a business it takes you to the review page where you can see other people's reviews for the store or leave your own. 

![User Reviews](https://github.com/user-attachments/assets/5af7cc60-375d-4a7d-9ed8-695cf6067fcf)  

This is also where you can find information about that store. 

![Screenshot 2024-08-13 164438](https://github.com/user-attachments/assets/65f31326-2b34-476f-b940-542bdbfb049a)  

Now lets say you want your website to be added to the website. All you do is fill out the information on the profile page. 

 ![Screenshot 2024-08-13 174104](https://github.com/user-attachments/assets/0d8b0811-b86d-4921-ba3c-a1a141f251ea)  
 
This will shoot an email to one of us that lets us manually add your business. Finally, we have the donate tab that simply lets you donate to the people who worked hard on this project. 

![Screenshot 2024-08-13 163613](https://github.com/user-attachments/assets/f235b5b0-e5c2-4c27-8f0f-3f8bc067cc55)  

If you hit sign out then you will be signed out and will need to log back in to see the site again. 

## Deployed Application

https://good-eats.onrender.com/

## Test Instructions

When doing an npm run build this will automatically test for you. The same goes for some of the other installations. We used a lot of console logging to make sure we provided plenty of feedback and made this a developer-friendly site. 

## Contribution Guidelines

Pull requests must be reviewed and approved by at least one group member.

## License

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

## Questions

Repository: https://github.com/Lrbenjamin/Good_Eats

## Contact us!

- Caleb Warford (@Rinovi): cjwarford98@gmail.com
- Annie Schalnat (@fairybones): aeschalna@gmail.com
- Logan Benjamin (@Lrbenjamin): Lrbenjamin22@gmail.com
- Damien Mendoza (@DMendoza013): damien.mendoza013@gmail.com

