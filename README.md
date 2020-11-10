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


   Project setup

    1. yarn add eslint --dev
    2. npx eslint --init // answer the questions
    3. it will ask you to add libraries using npm
    4. remove npm lock file and yarn install
    5. add prettier config and prettierignore
    6. add editorconfig
    7. add preetier, babel and plugins to eslintrc file
    8. add settings in vscode
 

