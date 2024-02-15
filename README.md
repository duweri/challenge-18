# Danielle's NoSQL Social Network API

## Description
 NoSQL Social Network API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. This API is built using Node.js and Mongoose, and it provides a simple and scalable way to handle social networking data without the restrictions of traditional relational databases.

 
## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge:

The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and must provide endpoints that can handle large amounts of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

## User Story:

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria:

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
