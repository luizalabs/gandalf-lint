# gandalf-lint
<center>
![alt text](https://img00.deviantart.net/51e6/i/2004/144/1/b/you_shall_not_pass.jpg)


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



# License

We are using rules from `eslint-config-standard` here's the [license from `eslint-config-standard` code](https://github.com/standard/eslint-config-standard/blob/master/LICENSE)


```
The MIT License (MIT)

Copyright (c) Feross Aboukhadijeh

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
```

We are also using rules from `eslint-config-airbnb-base` here's the [license from `eslint-config-airbnb-base` code](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/LICENSE.md)


```
MIT License

Copyright (c) 2012 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

This project licence is also MIT.