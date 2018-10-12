# gandalf-lint

<p align="center">
	<img src="https://img00.deviantart.net/51e6/i/2004/144/1/b/you_shall_not_pass.jpg"/><br/>
	image source: <a href="https://www.deviantart.com/captaind/art/you-shall-not-pass-7505473">Deviantart - CaptainD</a>
</p>


<h3 align="center" style="font-weight: bold;">
  <b>BAD CODE SHALL NOT PASS!</b>
</h3>

## Install
Dependencies via NPM:
```bash
npm install --save-dev eslint @softboxlab/eslint-config-gandalf-lint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-sort-imports-es6-autofix eslint-plugin-standard eslint-plugin-vue
```

or via yarn:
```bash
yarn add --dev eslint @softboxlab/eslint-config-gandalf-lint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-sort-imports-es6-autofix eslint-plugin-standard eslint-plugin-vue
```

## Configure
Call the white wizard by creating a `.eslintrc` file on your root project and writing in it:
```javascript
{
  "extends": "@softboxlab/eslint-config-gandalf-lint"
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

**If you don't fell like creating any scripts, feel free to have your files linted on the fly by your IDE (did you remember to install the `eslint` plugin on your IDE?)**



# License

The MIT License (MIT)

[Copyright (c) Feross Aboukhadijeh](https://github.com/standard/eslint-config-standard)

[Copyright (c) 2012 Airbnb](https://github.com/airbnb/javascript)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

This project licence is also MIT.
