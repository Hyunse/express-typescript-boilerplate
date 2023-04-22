import bcrypt from 'bcrypt';

const BCRYPT_ROUNDS = 10;

/**
 * Campare Password between input password and encrypted password
 *
 * @param {string} originPassword
 * @param {string} encryptedPassword
 * @return {boolean}
 */
const comparePassword = (
  originPassword: string,
  encryptedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(originPassword, encryptedPassword);
};

/**
 * Encrypt Password
 *
 * @param {string} password
 * @return {string} encrypted password
 */
const encryptPassword = async (password: string): Promise<String> => {
  if (password) {
    const hashedPassword = await hashPassword(password);
    return hashedPassword;
  }

  throw new Error('Worng Password');
};

/**
 * Call Hash Function
 *
 * @param {string} password
 * @return {string} encrypted password
 */
const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
};

export { comparePassword, encryptPassword, hashPassword };
