function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const defaultOptions = {
  length: 16,
  withLowerLetters: true,
  withUpperLetters: true,
  withNumbers: true,
  withSymbols: true,
};

const rules = {
  withLowerLetters: 'abcdefghigklmnopqrstuvwzys',
  withUpperLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  withNumbers: '0123456789',
  withSymbols: '!@#$%^&*(){}=_-',
};

function generatePassword(options = defaultOptions) {
  const allChars = Object.keys(rules).reduce((acc, rule) => options[rule] ? acc += rules[rule] : acc, '');
  let password = '';

  while(password.length !== options.length) {
    const index = getRandomInt(0, allChars.length - 1);

    password += allChars[index];
  }

  return password;
}
