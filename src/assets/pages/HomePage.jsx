import React from 'react'

export default function HomePage() {
  return (
    <div>
      <main>
        <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-inherit p-4">
                    <div>
                        <h1 className='text-3x1 font-bold'>
                            Project Overview: MERN Stack CRUD with JWT Authentication
                        </h1> 
                        <p className='text-justify'>
                            This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It showcases the basic operations of Create, Read, Update, and Delete (CRUD) for managing data within a MongoDB database, along with user authentication and authorization using JSON Web Tokens (JWT).
                        </p>
                    </div>
                    <div className="mt-5 animate-none">
                        <h1 className='text-3x1 font-bold'>How the Project Works</h1>
                        <p className='text-justify'>
                            1. Frontend (React.js)
                            The UI is built with React.js, providing a responsive and interactive experience. It includes forms for user registration and login, as well as views for listing, creating, updating, and deleting data.
                            The frontend communicates with the backend via RESTful APIs using HTTP methods (GET, POST, PUT, DELETE). It handles the JWT for authenticating requests.
                        </p>
                    </div>
                    <div className="mt-5">
                        <p className='text-justify'>
                            2. Backend (Node.js, Express.js)
                            The backend exposes several API endpoints for CRUD operations and authentication. Each endpoint corresponds to a specific action, such as creating a user or retrieving a list of items.
                            The backend generates and validates JWTs. Middleware functions ensure that only authenticated users can access protected routes.
                            The backend uses Mongoose to interact with MongoDB, performing CRUD operations on the data stored in the database.
                        </p>
                    </div>
                    <div className="mt-5 text-justify">
                        <p>
                            3. Database (MongoDB):
                            MongoDB stores the application data, including user information and other resources. Mongoose schemas define the structure of the data.
                            The use of MongoDB allows for a flexible and scalable data model, accommodating various types of data without a rigid schema.
                        </p>
                    </div>
                </div>
                <div className="bg-black p-4 flex justify-center items-center">
                    <img className='animate-spin h-4/5' src="logo192.png" alt="Logo" />
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
