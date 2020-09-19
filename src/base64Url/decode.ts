import { base64 } from '../index';

const base64RegExp = /^[a-zA-Z0-9_-]*$/;

export const base64UrlToBase64 = (base64url: string): string =>
  base64url.replace(/-/g, '+').replace(/_/g, '/');

/**
 * See https://tools.ietf.org/html/rfc4648#section-5 to more information
 * @param value
 */
const decode = (value: string): string => {
  if (!base64RegExp.test(value)) {
    throw new TypeError('value is not a valid base64url encoded string');
  }
  return base64.decode(base64UrlToBase64(value));
};

export default decode;
