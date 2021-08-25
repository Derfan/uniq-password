const { generatePassword } = require('./generatePassword');

describe('generatePassword', () => {
  test('should generate with default length', () => {
    expect(generatePassword().length).toBe(16);
  });

  test('should generate with given length', () => {
    [1, 10, 50, 75, 100].forEach(length => {
      expect(generatePassword({ length }).length).toBe(length);
    });
  });

  test('should throw an error if all schars are disabled', () => {
    const generatorWithDisabledChars = () => {
      generatePassword({ withUpperLetters: false, withLowerLetters: false, withNumbers: false, withSymbols: false });
    };
    expect(generatorWithDisabledChars).toThrow();
  });
});
