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

function generatePassword(options = defaultOptions) {
  const params = { ...defaultOptions, ...options };

  let chars = '';
  let password = '';

  if (params.withLowerLetters) chars += 'abcdefghigklmnopqrstuvwzys';
  if (params.withUpperLetters) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (params.withNumbers) chars += '0123456789';
  if (params.withSymbols) chars += '!@#$%^&*(){}=_-';

  if (!chars.length) {
    throw new Error('At least one of the category should be selected');
  }

  while(password.length !== params.length) {
    const index = getRandomInt(0, chars.length - 1);

    password += chars[index];
  }

  return password;
}

module.exports = { getRandomInt, generatePassword, defaultOptions };
