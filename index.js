function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(options) {
  var letters = 'abcdefghigklmnopqrstuvwzys';
  var lettersUpper = letters.toUpperCase();
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()';
  var allChars = letters + lettersUpper + numbers + symbols;
  var password = '';

  while(password.length !== options.length) {
    var index = getRandomInt(0, allChars.length - 1);

    password += allChars[index];
  }

  return password;
}

module.exports = generatePassword;
