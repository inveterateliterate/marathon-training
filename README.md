# marathon-training

## Getting Started
### Prerequisites
+ `node ^8.0.0`
+ `yarn ^1.0.0`

### Initializing From Template
+ `yarn setup`

### Running in Development
+ `yarn start`

### Running in Production
+ `yarn build`
+ `yarn server`

### Development Workflow

#### Committing
Pull requests to the `dev` branch will trigger review apps in Heroku (review app.json for config details)

#### Testing
Includes unit testing with [Jest](https://facebook.github.io/jest/) and integration testing with [Cypress](https://www.cypress.io/). Run all tests with `yarn test`.

#### Linting
Lint from the command line with `yarn lint`.
