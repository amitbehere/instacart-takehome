# Heading
InstaCart take home assignment.

## Description
Implement the UI as described in instacart-assignment.pdf in the root folder.

## Requirements
Latest Node JS version 16.7.0. This code has only been tested on this version.

## How to build the application
- Unzip the provided zip file.
- Run `npm install`

## Running the application
- Run `npm start` and go to http://localhost:8080/

## Testing the application
- Run `npm test` to run unit tests
- Run `npm run lint` to run linter

## What the provided scripts do
- The `npm test` and `npm test:watch are self-explanatory`
- The `start:production` and `build` scripts are for testing and building production (bundled) code. They are not required to test/review the assignment. Included for completeness.

## Future improvements/work
- Full test coverage. I added tests for reducers and 2-3 react components as proof of concept. Integration tests are not written.
- I haven't written CSS in 3 years or so, so it's suboptimal, but it's on the right track IMO.
- Convert to TypeScript