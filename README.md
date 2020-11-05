to set up project

1. yarn init / npm init (it will create package.json)
2. yarn add webpack wepack-cli
3. add "script" section in package.json file
    "scripts": {
        "build": "webpack --config prod.config.js"
    },
4. add mode, entry, output and module for babel in webpack.config.json
5. yarn add -D babel-loader @babel/core @babel/preset-env
6. create .babelrc file and add babel configuration
    example
    {
    "presets": ["@babel/preset-env"]
    }
