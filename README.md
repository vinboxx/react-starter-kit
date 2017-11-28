# react-starter-kit

## Installation
```
npm install
```

## Running App
```
npm start
```
This command will run app in development mode.
Open http://localhost:8080 to view it in the browser.
Browser will automatically reload if you make changes to the code.

## Production build
```
npm run build
```
This command will creating a minified bundle for you in `dist` folder

## What's inside?
* [React](https://reactjs.org/)
* [webpack](https://webpack.js.org/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* Webpack plugins and loader: [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin), [css-loader](https://github.com/webpack-contrib/css-loader) and [style-loader](https://github.com/webpack/style-loader)
* [Babel](http://babeljs.io/) with ES6 and react preset
* and others.

## File Structure
```
your-app
├── config
│   └── webpack.common.js
│   └── webpack.dev.js
│   └── webpack.prod.js
├── dist (Auto generated from build process)
├── node_modules (Auto generated when run npm install)
├── src
│   └── App.js
│   └── index.html
│   └── index.js
├── .bebalrc
├── .editorconfig
├── .gitignore
├── package.json
└── README.md
```

## Downgrade to React 15
If your dependensies have an issue with react 16, you can downgrade to react 15 using this command
```
npm install -DE react@15 react-dom@15
```
