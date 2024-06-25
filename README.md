# voting-ap-Node.js
Project- [ Voting_Application ]

Description: This is a comprehensive voting application built with Node.js,Express.js and MongoDB for data storage, designed to enable secure and straightforward voting processes using JWT authentication. The application features solidly built user authentication, candidate management, and real-time vote-tracking functionalities. It supports various essential features required for an effective and transparent electoral process.

---- Features -----

User Authentication: Users can sign up and log in using their CNIC (a unique identifying number) and a password. Incorporates JWT authentication to maintain secure sessions and verify user credentials effectively.
Candidate Listing and Voting: Users can view a list of candidates and vote for their preferred candidate. The system ensures that each user can vote only once, preserving the integrity of the voting process.
Real-Time Vote Count: The application provides a live ranking of candidates based on the number of votes each has received, allowing users to see real-time updates.
User Profile Management: Users can view their profile information and change their password, ensuring their account's security.
Admin Controls: Admins can manage the list of candidates, including adding, updating, and deleting candidates from the system. Admins do not have voting privileges to maintain the neutrality of the election process.
---- Routes ------

POST /signup - Register a new user with role-based access control.
POST /login - Login for existing users using CNIC and password.
GET /vote/candidate - Retrieve a list of candidates.
POST /vote/candidate/:candidateId - Cast a vote for a specific candidate.
GET /vote/count - Fetch live vote counts and rankings.
POST /candidate - Add new candidates (Admin only).
PUT /candidate/:candidateId - Update candidate details (Admin only).
DELETE /candidate/:candidateId - Remove a candidate from the list (Admin only).
GET /user/profile - Retrieve user profile details.
PUT /profile/password - Update user password.
------ What I learned through this ------

Backend Setup: Configuring and managing server-side logic and APIs with Node.js and Express.js.
Database Handling: Effective use of MongoDB for data storage, and managing user and candidate data.
Frontend Integration: Building a dynamic UI with React, connecting it with the backend for real-time data updates.
Security Implementation: Developing secure authentication mechanisms using JWTs to ensure that each vote is verified and to maintain secure user sessions.
