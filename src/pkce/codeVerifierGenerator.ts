import { RandomUtils } from '@4us-dev/utils';

const randomUtils = new RandomUtils();
const minLength = 43;
const maxLength = 128;
export const caracteresAllowed =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';

/**
 * See https://tools.ietf.org/html/rfc7636#section-4.1 to more information
 */
export default (length = maxLength): string => {
  if (length < minLength || length > maxLength) {
    throw new Error(
      'the code verifier must be between 43 and 128 characters long.'
    );
  }
  return randomUtils.nextStringCustom(length, caracteresAllowed);
};
