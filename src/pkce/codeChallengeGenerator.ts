import { base64Url, sha256 } from '../';
import isBrowser from '../isBrowser';

/**
 * See https://tools.ietf.org/html/rfc7636#section-4.2 to more information
 */
export default (codeVerifier: string): string => {
  if (isBrowser()) {
    throw new Error(
      'No support for codeChallengeGenerator() in the browser, use codeChallengeGeneratorAsync()'
    );
  }
  const valueHashed = sha256(codeVerifier);
  return base64Url.base64ToBase64Url(
    Buffer.from(valueHashed, 'hex').toString('base64')
  );
};
