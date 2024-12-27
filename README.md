# My Express App

This project is a RESTful API built with Express, TypeScript, and Sequelize. It provides endpoints for managing events, users, schedules, schedule types, event schedules, and user schedules.

## Project Structure

```
my-express-app
├── src
│   ├── app.ts                     # Entry point of the application
│   ├── controllers                # Contains controllers for each entity
│   │   ├── EventController.ts
│   │   ├── UserController.ts
│   │   ├── ScheduleController.ts
│   │   ├── ScheduleTypeController.ts
│   │   ├── EventScheduleController.ts
│   │   └── UserScheduleController.ts
│   ├── models                     # Contains Sequelize models for each entity
│   │   ├── Event.ts
│   │   ├── User.ts
│   │   ├── Schedule.ts
│   │   ├── ScheduleType.ts
│   │   ├── EventSchedule.ts
│   │   └── UserSchedule.ts
│   ├── routes                     # Contains route definitions for each entity
│   │   ├── EventRoutes.ts
│   │   ├── UserRoutes.ts
│   │   ├── ScheduleRoutes.ts
│   │   ├── ScheduleTypeRoutes.ts
│   │   ├── EventScheduleRoutes.ts
│   │   └── UserScheduleRoutes.ts
│   └── types                      # Contains TypeScript types and interfaces
│       └── index.ts
├── package.json                   # NPM configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Project documentation
```

## Features

- **CRUD Operations**: Each entity supports Create, Read, Update, and Delete operations.
- **Count Endpoint**: Each entity has an endpoint to count the total number of records.
- **TypeScript**: The project is written in TypeScript for better type safety and development experience.
- **Sequelize**: Utilizes Sequelize as the ORM for database interactions.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-express-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your database configuration in the Sequelize models.

## Running the Application

To start the application, run:
```
npm start
```

The server will start and listen for requests.

## API Endpoints

- **Events**
  - `GET /events` - Get all events
  - `GET /events/:id` - Get event by ID
  - `POST /events` - Create a new event
  - `PUT /events/:id` - Update an event
  - `DELETE /events/:id` - Delete an event
  - `GET /events/count` - Count total events

- **Users**
  - `GET /users` - Get all users
  - `GET /users/:id` - Get user by ID
  - `POST /users` - Create a new user
  - `PUT /users/:id` - Update a user
  - `DELETE /users/:id` - Delete a user
  - `GET /users/count` - Count total users

- **Schedules**
  - `GET /schedules` - Get all schedules
  - `GET /schedules/:id` - Get schedule by ID
  - `POST /schedules` - Create a new schedule
  - `PUT /schedules/:id` - Update a schedule
  - `DELETE /schedules/:id` - Delete a schedule
  - `GET /schedules/count` - Count total schedules

- **Schedule Types**
  - `GET /schedule-types` - Get all schedule types
  - `GET /schedule-types/:id` - Get schedule type by ID
  - `POST /schedule-types` - Create a new schedule type
  - `PUT /schedule-types/:id` - Update a schedule type
  - `DELETE /schedule-types/:id` - Delete a schedule type
  - `GET /schedule-types/count` - Count total schedule types

- **Event Schedules**
  - `GET /event-schedules` - Get all event schedules
  - `GET /event-schedules/:id` - Get event schedule by ID
  - `POST /event-schedules` - Create a new event schedule
  - `PUT /event-schedules/:id` - Update an event schedule
  - `DELETE /event-schedules/:id` - Delete an event schedule
  - `GET /event-schedules/count` - Count total event schedules

- **User Schedules**
  - `GET /user-schedules` - Get all user schedules
  - `GET /user-schedules/:id` - Get user schedule by ID
  - `POST /user-schedules` - Create a new user schedule
  - `PUT /user-schedules/:id` - Update a user schedule
  - `DELETE /user-schedules/:id` - Delete a user schedule
  - `GET /user-schedules/count` - Count total user schedules

## License

This project is licensed under the MIT License.