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

| Name              | Description                      | Default Value |
| ----------------- | -------------------------------- | ------------- |
| ?length           | Size of result string            | 16            |
| ?withLowerLetters | Should include `[a-z]`           | true          |
| ?withUpperLetters | Should include `[A-Z]`           | true          |
| ?withNumbers      | Should include `0123456789`      | true          |
| ?withSymbols      | Should include `!@#$%^&*(){}=_-` | true          |
