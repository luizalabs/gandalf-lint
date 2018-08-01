# gandalf-lint

<p align="center">
  <img src="https://img00.deviantart.net/51e6/i/2004/144/1/b/you_shall_not_pass.jpg"/>
</p>

<center>
  **BAD CODE SHALL NOT PASS!**
</center>

## Install
Dependencies via NPM:
```bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

or via yarn:
```bash
yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

After install the dependencies, you will install the most powerful linter of the middle-earth:
```bash
npm install git+https://github.com/SoftboxLab/gandalf-lint.git
```

or via yarn:
```bash
yarn add https://github.com/SoftboxLab/gandalf-lint.git
```

## Configure
Call the white wizard by creating a `.eslintrc` file on your root project and writing in it:
```javascript
{
  "extends": "gandalf-lint"
}
```

Remember to add the `eslint` plugin on your favorite IDE, like this one: [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage
If you want you can create a script on your `package.json` file like so:
```json
"scripts": {
  "glint": "./node_modules/.bin/eslint ./{YOUR_PROJECT}/*.js"
}
```

And use your magic script for shall not pass any bad code:
```bash
npm run glint
```

or using yarn:

```bash
yarn glint
```

**If you don't fell like creating any scripts, feel free to have your files linted on the fly by your IDE (did you remember to install the `eslint` plugin on your IDE?)!**

