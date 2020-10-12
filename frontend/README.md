# React-TypeScript-Webpack Frontend

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Install the project dependencies by running

```
yarn
```

Or using NPM

```
npm install
```

#### Development

We will utilise `webpack-dev-server` to run a dev server. It serves webpack projects and updates the browser automatically with any changes we make in our code.

You can run `webpack-dev-server --mode development` or alternatively utilise our npm scripts inside our `package.json`

```
yarn dev
```

Or using NPM

```
npm run dev
```

#### Tests

You can create tests in the `src/__tests__` folder. Tests are handled by [Jest](https://jestjs.io/)

To run tests:

```
yarn test
```

Or using NPM

```
npm run test
```

#### Production

You can run `webpack --mode production` or the below using our npm scripts.

```
yarn build
```

Or using NPM

```
npm run build
```

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that compiles to clean JavaScript.
- [Webpack](https://webpack.js.org/) - App bundler for JavaScript.
- [Jest](https://jestjs.io/) - JavaScript Testing Framework.

#### Required for Webpack and TypeScript

- [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) - Helps Webpack compile our TypeScript code using `tsconfig.json`

#### Webpack Plugins

- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) - Simplifies creation of HTML files to serve our webpack bundles.
