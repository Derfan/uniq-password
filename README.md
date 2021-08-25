# password-generator

Utility function for generating uniq password, can be used by Node.js or browser.

## Installation

```bash
$ npm install generate-password --save
```

## Usage

```javascript
const { generatePassword } = require("@derfan/password-generator");

// OR

import { generatePassword } from "@derfan/password-generator";
```

```javascript
const config = { length: 10 };

generatePassword(config);
```

## Available options

| Name              | Description                      | Default Value |
| ----------------- | -------------------------------- | ------------- |
| ?length           | Size of result string            | 16            |
| ?withLowerLetters | Should include `[a-z]`           | true          |
| ?withUpperLetters | Should include `[A-Z]`           | true          |
| ?withNumbers      | Should include `0123456789`      | true          |
| ?withSymbols      | Should include `!@#$%^&*(){}=_-` | true          |
