interface PasswordOptions {
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

/* Generate one uniq password */
export function generatePassword(options?:PasswordOptions):string;
