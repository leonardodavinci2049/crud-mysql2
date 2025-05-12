# crud-mysql2

A simple CRUD (Create, Read, Update, Delete) application using mysql2 with TypeScript.

## Overview

This project demonstrates how to build a database-driven application using the mysql2 package in a TypeScript environment. It's designed for educational purposes to help developers understand how to implement database operations in a TypeScript project.

## Features

- Create, Read, Update, and Delete database records
- Type-safe database interactions using TypeScript
- Efficient database connection management with mysql2
- Structured project organization following best practices

## Technologies

- TypeScript
- mysql2 package
- Node.js
- Express.js (optional)

## Credits & References

This project was inspired by and developed following the tutorial:

- [MySQL2  WITH TypeScript CRUD Tutorial](https://www.youtube.com/watch?v=zwTsol7i2Sk) - A comprehensive guide on building MySQL CRUD operations with TypeScript

## Getting Started

### Prerequisites

- Node.js (v14+)
- MySQL Server
- npm or yarn

### Installation

1. Clone the repository

```
git clone https://github.com/yourusername/crud-mysql2.git
cd crud-mysql2
```

2. Install dependencies

```
npm install
```

3. Configure your database connection in `config/database.ts`

4. Run the development server

```
npm run dev
```

## Database Setup

Before running the application, you need to set up your database and create the required table:

### User Table Structure

Create the `tbl_user` table with the following MySQL command:

```sql
CREATE TABLE tbl_user (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  createdAt datetime NOT NULL,
  PRIMARY KEY (id)
);
```

This table will store user information with the following fields:

- `id`: Unique identifier (auto increment)
- `name`: User's name
- `email`: User's email address
- `createdAt`: Timestamp when the record was created

## Usage

Examples of how to use the application will be documented here.

## Project Structure

```
src/
├── config/       # Database and app configuration
├── controllers/  # Request handlers
├── models/       # Database models
├── routes/       # API routes
├── utils/        # Utility functions
└── index.ts      # Application entry point
```

## Educational Purpose

This project is created for educational purposes to demonstrate:

- TypeScript integration with database operations
- Proper error handling in database applications
- Code organization in a TypeScript Node.js project
- Best practices for CRUD operations

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

If you have any questions, please open an issue in this repository.
