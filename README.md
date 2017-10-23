# JestTesting

[![Build Status](https://travis-ci.org/iMobs/JestTesting.svg?branch=master)](https://travis-ci.org/iMobs/JestTesting)
[![Coverage Status](https://coveralls.io/repos/github/iMobs/JestTesting/badge.svg?branch=master)](https://coveralls.io/github/iMobs/JestTesting?branch=master)

An example full stack app using Jest for testing

## package.json anatomy

### scripts

- `build`: Runs webpack with production flag
- `dev`: Runs webpack with development flag in watch mode
- `start`: Runs the node server
- `test`: Runs jest tests
- `test:coverage` Same as `test` with coverage that gets uploaded to coveralls
- `lint`: Runs eslint on `*.js` and `*.jsx` files

### babel and jest config

Instead of having a seperate .babelrc and jest.config.js I've opted for putting the configuration settings into the package.json file. The babel presets should be familiar for converting React, with a few extra features added. The jest configuration is being used to set [coverage thresholds](https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object) that will cause jest to error out if a certain percentage is not achieved in the project.
