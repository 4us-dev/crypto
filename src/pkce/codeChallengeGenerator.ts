import { base64Url, sha256 } from '@4us-dev/crypto';

/**
 * See https://tools.ietf.org/html/rfc7636#section-4.2 to more information
 */
export default (codeVerifier: string): string => {
  return base64Url.base64ToBase64Url(sha256(codeVerifier, 'base64'));
};
