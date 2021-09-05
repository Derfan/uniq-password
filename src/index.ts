function getRandomInt(min:number, max:number):number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface PasswordOptions {
  /**
   * Length of the generated password.
   * @default 10
   */
  length?: number,
  /**
   * Should the password include lowrcase letters
   * @default true
   */
  withLowerLetters?: boolean,
  /**
   * Should the password include uppercase letters
   * @default true
   */
  withUpperLetters?: boolean,
  /**
   * Should the password include numbers
   * @default true
   */
  withNumbers?: boolean,
  /**
   * Should the password include symbols
   * @default true
   */
  withSymbols?: boolean,
}

export const defaultOptions = {
  length: 16,
  withLowerLetters: true,
  withUpperLetters: true,
  withNumbers: true,
  withSymbols: true,
};

export function generatePassword(options:PasswordOptions = defaultOptions):string {
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

  while (password.length !== params.length) {
    const index = getRandomInt(0, chars.length - 1);

    password += chars[index];
  }

  return password;
}
