import { base64Url, sha256Async } from '..';

/**
 * See https://tools.ietf.org/html/rfc7636#section-4.2 to more information
 */
export default async (codeVerifier: string): Promise<string> => {
  const valueHashed = await sha256Async(codeVerifier);
  return base64Url.base64ToBase64Url(
    Buffer.from(valueHashed, 'hex').toString('base64')
  );
};
