# gandalf-lint

<div align="center">
	<img src="https://media.giphy.com/media/8abAbOrQ9rvLG/giphy.gif" /><br/>
  Bad Code Shall Not Pass
</div>

## Install
NPM:
```bash
npm install --save-dev @softboxlab/eslint-config-gandalf-lint
```

Yarn:
```bash
yarn add --dev @softboxlab/eslint-config-gandalf-lint
```

Our default export contains all of our ESLint rules. Install the correct versions of each package, which are listed by the command:

```bash
npx install-peerdeps --dev @softboxlab/eslint-config-gandalf-lint
```

## Requirements

- [npm](https://www.npmjs.com/) `^5.0.0`
- [ESLint](http://eslint.org/) `^5.15.3`

## Configure
Call the white wizard by creating a `.eslintrc` file on your root project and writing in it:
```javascript
{
  "extends": "@softboxlab/eslint-config-gandalf-lint"
}
```

Remember to add the `eslint` plugin on your favorite IDE, like this one: [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage
You can create a script on your `package.json` file like so:
```json
"scripts": {
  "glint": "eslint --ext .js PROJECT_FOLDER"
}
```

And use your magic script for shall not pass any bad code:
```bash
npm run glint
```

And with fireworks you can automagically fix some errors:
```bash
npm run glint --fix
```

or using yarn:

```bash
yarn glint
yarn glint --fix
```

## Autorun it?

**If you don't fell like creating any scripts, feel free to have your files linted on the fly by your IDE (did you remember to install the `eslint` plugin on your IDE?)**

---

<div align="center">
	<img src="https://media.giphy.com/media/TcdpZwYDPlWXC/giphy.gif"/><br/>
  Gandalf approves
</div>

## Contributors

  - [View Contributors](https://github.com/SoftboxLab/gandalf-lint/graphs/contributors)

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
