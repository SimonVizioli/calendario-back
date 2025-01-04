# Calendario-Back

This project is a RESTful API built with Express, TypeScript, and Sequelize. It provides endpoints for managing events, users, schedules, schedule types, event schedules, and user schedules.

## Project Structure

```
calendario-back
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
│   ├── middlewares                # Contains middleware functions
│   │   └── loggerMiddleware.ts
│   ├── database                   # Contains database configuration and initialization
│   │   └── db.ts
│   └── types                      # Contains TypeScript types and interfaces
│       └── index.ts
├── docker                         # Contains Docker configuration files
│   ├── docker-compose.yml
│   └── Dockerfile
├── .env                           # Environment variables file
├── .gitignore                     # Git ignore file
├── calendario.postman_collection.json # Postman collection for API testing
├── LICENSE                        # License file
├── package.json                   # NPM configuration file
├── pnpm-lock.yaml                 # PNPM lock file
├── README.md                      # Project documentation
├── tsconfig.json                  # TypeScript configuration file
```

## Features

-   **CRUD Operations**: Each entity supports Create, Read, Update, and Delete operations.
-   **Count Endpoint**: Each entity has an endpoint to count the total number of records.
-   **TypeScript**: The project is written in TypeScript for better type safety and development experience.
-   **Sequelize**: Utilizes Sequelize as the ORM for database interactions.

## Installation

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd calendario-back
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

### Events

-   `GET /events`: Get all events
-   `GET /events/:id`: Get event by ID
-   `POST /events`: Create a new event
-   `PUT /events/:id`: Update an event by ID
-   `DELETE /events/:id`: Delete an event by ID
-   `GET /events/count`: Get the total number of events

### Users

-   `GET /users`: Get all users
-   `GET /users/:id`: Get user by ID
-   `POST /users`: Create a new user
-   `PUT /users/:id`: Update a user by ID
-   `DELETE /users/:id`: Delete a user by ID
-   `GET /users/count`: Get the total number of users

### Schedules

-   `GET /schedules`: Get all schedules
-   `GET /schedules/:id`: Get schedule by ID
-   `POST /schedules`: Create a new schedule
-   `PUT /schedules/:id`: Update a schedule by ID
-   `DELETE /schedules/:id`: Delete a schedule by ID
-   `GET /schedules/count`: Get the total number of schedules

### Schedule Types

-   `GET /schedule-types`: Get all schedule types
-   `GET /schedule-types/:id`: Get schedule type by ID
-   `POST /schedule-types`: Create a new schedule type
-   `PUT /schedule-types/:id`: Update a schedule type by ID
-   `DELETE /schedule-types/:id`: Delete a schedule type by ID
-   `GET /schedule-types/count`: Get the total number of schedule types

### Event Schedules

-   `GET /event-schedules`: Get all event schedules
-   `GET /event-schedules/:id`: Get event schedule by ID
-   `POST /event-schedules`: Create a new event schedule
-   `PUT /event-schedules/:id`: Update an event schedule by ID
-   `DELETE /event-schedules/:id`: Delete an event schedule by ID
-   `GET /event-schedules/count`: Get the total number of event schedules

### User Schedules

-   `GET /user-schedules`: Get all user schedules
-   `GET /user-schedules/:id`: Get user schedule by ID
-   `POST /user-schedules`: Create a new user schedule
-   `PUT /user-schedules/:id`: Update a user schedule by ID
-   `DELETE /user-schedules/:id`: Delete a user schedule by ID
-   `GET /user-schedules/count`: Get the total number of user schedules

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
