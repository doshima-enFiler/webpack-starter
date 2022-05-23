# webpack-starter

Webpackとnpm scriptsを使用した、Flocss × Dart Sassのコーディング環境。

## How to use

'git clone https://github.com/oshima-daiki/webpack-starter'

'npm i'

'npm run w'

npm i
  "scripts": {
    "watch:server": "browser-sync start --config bs-config.js",
    "watch:webpack": "webpack --watch",
    "build": "webpack",
    "w": "npm-run-all -p watch:webpack watch:server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.17.9",
    "@babel/preset-env": "^7.16.11",
    "autoprefixer": "^10.4.7",
    "babel-loader": "^8.2.5",
    "browser-sync": "^2.27.9",
    "css-loader": "^6.7.1",
    "mini-css-extract-plugin": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.13",
    "postcss-loader": "^6.2.1",
    "sass": "^1.50.1",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  }
}
