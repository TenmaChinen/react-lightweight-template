# Description

Repo to fast create lightweight React project

# Structure

```
project
├── src
│   ├── index.html
│   └── index.js
│
├── .babelrc
├── webpack.config.js
│
├── package           <= ( Created by npm init -y )
├── package-lock.json <=
└── node_modules      <= ( after installing libraries )
```

# Setup

- npm init -y     ( Create package.json to manage dependencies )


- Edit the `package.json` adding the `start` key value
  ```json
  {
    "main": "webpack.config.js",
    "scripts": {
      "start": "webpack serve --config webpack.config.js" 
    },
  }
  ```

- Install the dependencies:

	```bash
	npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D

	npm i react react-dom -S
	```

	| Command     | Abbr | Description                                   |
	|-------------|:----:|-----------------------------------------------|
	| --save-dev  |  -D  | save the package only for dev purpose         |
	| --save      |  -S  | saves the package required for the app to run |



- in terminal type: `npm run start`

