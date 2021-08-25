# password-generator

Utility function for generating uniq password, can be used by Node.js or browser.

## Installation

```bash
$ npm install @derfan/password-generator --save
```

or

```bash
$ yarn add @derfan/password-generator
```

## Usage

```javascript
import { generatePassword } from "@derfan/password-generator";
```

or

```javascript
const { generatePassword } = require("@derfan/password-generator");
```

```javascript
const password = generatePassword({ length: 10 });

console.log(password); // gLk7C_ycv3
```

## Available options

| Name             | Description                      | Required | Default Value |
| ---------------- | -------------------------------- | -------- | ------------- |
| length           | Size of result string            | false    | 16            |
| withLowerLetters | Should include `[a-z]`           | false    | true          |
| withUpperLetters | Should include `[A-Z]`           | false    | true          |
| withNumbers      | Should include `0123456789`      | false    | true          |
| withSymbols      | Should include `!@#$%^&*(){}=_-` | false    | true          |
