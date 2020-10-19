# React-TV-Show-App
A test task that is to implement a TV show page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- [x] Enable resources minifying in Webpack (defalut configration by CRA)
- [x] Enable chunk-splitting and tree-shaking in Webpack (defalut configration by CRA)
- [x] Replace the lodash by lodash-es which support tree-shaking to reduce the package size
- [x] Support Hot Module Reload
- [x] Use redux as the state management library and redux-thunk as the asynchronous action handling middleware
- [x] Redux resouce files management follow the proposal[ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)
- [x] Use the react hooks and react-redux hook api
- [x] Use React memo to avoid unnecessary component renders.
- [x] Use React lazy and suspence api to realize the lazy loading
- [x] Display a skeleton on the screen during the data loading to improve user experience
- [x] Unit tests by using Jest and Enzyme on both UI and redux are involved.
- [x] Use react-app-rewired and customize-cra to override the default webpack configration


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
