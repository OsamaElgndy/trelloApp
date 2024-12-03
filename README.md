# TrelloApp

## Overview

TrelloApp is a project management tool built with **Node.js**, **Nest.js**, **TypeScript**, **TypeORM**, **Docker**, and **PostgreSQL**. The application allows users to manage tasks in boards and lists, similar to the Trello app. It provides robust RESTful APIs for seamless task creation, updating, and deletion. The application ensures secure authentication with **JWT (JSON Web Tokens)**, allowing users to register, log in, and manage their tasks securely.

## Features

- **Task and List Management:** Users can create, update, delete, and move tasks between different lists in a board.
- **Secure Authentication:** Integrated JWT for user registration, login, and task management.
- **RESTful API:** Well-defined API routes for managing tasks, lists, and boards.
- **Database Integration:** PostgreSQL as the database, with **TypeORM** to interact with the data.
- **Dockerized Application:** The app is containerized using Docker for easy deployment and scalability.
- **Efficient Data Handling:** Optimized data interaction for a smooth user experience with minimal latency.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side programming.
- **Nest.js:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript:** A statically typed superset of JavaScript.
- **TypeORM:** An ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **Docker:** Used for containerization, making the app easy to deploy in different environments.
- **PostgreSQL:** Relational database for storing user data, tasks, boards, and lists.
- **JWT (JSON Web Tokens):** Used for secure authentication and authorization.

## API Endpoints

### Authentication

- **POST `/auth/register`** - Register a new user
- **POST `/auth/login`** - Log in with JWT authentication

### Boards

- **GET `/boards`** - Retrieve all boards
- **POST `/boards`** - Create a new board
- **GET `/boards/:boardId`** - Get a specific board by ID
- **PUT `/boards/:boardId`** - Update a board's information
- **DELETE `/boards/:boardId`** - Delete a specific board

### Lists

- **GET `/boards/:boardId/lists`** - Retrieve all lists in a board
- **POST `/boards/:boardId/lists`** - Create a new list in a board
- **GET `/lists/:listId`** - Get a specific list by ID
- **PUT `/lists/:listId`** - Update a list's information
- **DELETE `/lists/:listId`** - Delete a specific list

### Tasks

- **GET `/lists/:listId/tasks`** - Retrieve all tasks in a list
- **POST `/lists/:listId/tasks`** - Create a new task in a list
- **GET `/tasks/:taskId`** - Get a specific task by ID
- **PUT `/tasks/:taskId`** - Update a task's information
- **DELETE `/tasks/:taskId`** - Delete a specific task

## Docker Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TrelloApp.git


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
