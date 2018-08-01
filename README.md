# gandalf-lint
![alt text](https://img00.deviantart.net/51e6/i/2004/144/1/b/you_shall_not_pass.jpg)

## Install
Dependencies:
```bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

After install the dependencies, you will install the powerful linter of the middle-earth:
```bash
npm install git+https://github.com/SoftboxLab/gandalf-lint.git
```

## Config
Call the white wizard in `.eslintrc` file:
```javascript
{
  "extends": "gandalf-lint"
}
```

## Use
Make a eslint script in your `package.json` file. Example:
```json
...
"scripts": {
  "eslint": "./node_modules/.bin/eslint ./{YOUR_PROJECT}/*.js"
},
...
```

And use your magic script for shall not pass any bad code:
```bash
npm run eslint
```
