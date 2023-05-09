# QA-Engineering-Challenge

This project contains end-to-end (E2E) Cypress testing setup for frontend and API testing. The project uses Swagger Codegen to generate a TypeScript API client library for the Petstore API, which is used for testing the API endpoints.

## Installation

To install the project dependencies, run the following command:

npm install

This will install the required dev dependencies, including Cypress, Swagger Codegen, and TypeScript.

# Generating the API Client Library

If you need to regenerate the TypeScript API client library for the Petstore API, you can use the following command:

npm run generate:api

## Running the Tests

### Frontend Tests
To run the frontend tests, you can use the following command:

npm run cypress:open

This will open the Cypress Test Runner, which allows you to interactively run and debug the frontend tests.

Alternatively, you can run the tests headlessly using the following command:

npm run cypress:run

This will run the tests in the background, without opening the Cypress Test Runner.

### API Tests

To run the API tests, you can use the following command:

npm run cypress:spec

This will run the Cypress tests located in the cypress/e2e directory. The tests use the generated TypeScript API client library to interact with the Petstore API and test the API endpoints.


This will use Swagger Codegen to generate a new TypeScript API client library based on the Swagger YAML file located at https://petstore.swagger.io/v2/swagger.yaml. The generated library will be saved in the src/api directory.
