This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

https://gitlab.com/snippets/1989026

The goal is to retrieve and display data provided by the drug database https://drugtargetcommons.fimm.fi

You should implement a web application that does the following:

retrieves bioactivity data through the API

displays a paginated table with selected bioactivity data

displays a pie chart of protein class classification (protein_class property) per page

You are limited to implementing this with any/all of the following: React, Redux, Highcharts, Ant design.
There should be clear instructions on how to setup and run the application in a new development environment.
Please provide the solution as a git code repository in your preferred free git hosting service.
The implementation will be evaluated against:

efficiency of implementation, i.e. minimized response times, re-renders, etc

use of best practices that promote modularity, code re-use, and maintainability

code readability and quality

Bonus:

implement a filter on max development phase (max_phase property)

Guide for testing:

Node.js and npm should be installed in their latest version.

Download the code files.

Use cmd and cd to the path of the app. Then press npm start.

There was a difficulty to properly import the data of protein class to the Highcharts library due to their nature of being in variables instead of simple numbers.

The bonus task has been implemented.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
