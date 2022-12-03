<p align="center">
<img width="672" height="340" src="https://user-images.githubusercontent.com/36823200/205452620-bba5cdc0-7ef4-450a-9cc6-d536973b2b43.png">
</p>

![Babel](https://img.shields.io/github/package-json/dependency-version/Rettend/coffeescript-template/dev/@babel/core?color=%23F5DA55&style=for-the-badge)
![CoffeeScript](https://img.shields.io/github/package-json/dependency-version/Rettend/coffeescript-template/dev/coffeescript?color=%233E2723&style=for-the-badge)
![ESLint](https://img.shields.io/github/package-json/dependency-version/Rettend/coffeescript-template/dev/eslint?color=%23482FBD&style=for-the-badge)

CoffeeScript is a language that compiles into JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in an effort to enhance JavaScript's brevity and readability. While also being almost as good as TypeScript.

No bracket jungle. No semicolons. No commas. No parentheses. No colons. No curly braces. No strings. No prototypes. No new keywords. No functions. No fat arrows. No var. No this. No that. No underbars. No confusion. No bullshit.
(Copilot volt nem én)

    # CoffeeScript
    square = (x) -> x * x

    // JavaScript
    var square = function(x) {
      return x * x;
    };

# Usage
## Installation

Install Node packages:

    npm i

[CoffeeScript](http://coffeescript.org/#introduction) is required to use coffee commands.

    npm install -g coffeescript

## Start compiling

`Ctrl+Shift+B` to start watching for changes. The compiled javascript will be in the `dist` folder.

## File structure

    .
    ├── .vscode
    │   └── tasks.json
    ├── dist
    │   ├── modules
    │   │   └── module.js
    │   └── main.js
    ├── src
    │   ├── modules
    │   │   └── module.coffee
    │   └── main.coffee
    ├── .babelrc
    ├── jsconfig.json
    ├── rollup.config.js

### .vscode/tasks.json
- This file is used by VSCode to run tasks. In this case, it is used to run the `watch` script in `package.json`.

### dist
- This folder contains the compiled javascript files.
- Only the `main.js` file is used in the `index.html` file.

### src
- This folder contains the coffeescript files.
> **Warning**
> when importing a module, add `.js` to the end of the path. NOT `.coffee`.

### .babelrc
- This file is used by [Babel](https://babeljs.io/) to compile the javascript files.
- It sets `modules` to `false` so that ES modules are preserved (the `import` statements are not compiled to `require` statements).

### jsconfig.json
- Enable type checking for javascript (and coffeescript) files.

### rollup.config.js
- Use [rollup-plugin-coffee-script](https://github.com/lautis/rollup-plugin-coffee-script) to integrate coffeescript with rollup.
