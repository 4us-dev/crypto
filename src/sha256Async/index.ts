import isBrowser from '../isBrowser';

const sha256Async = async (value: string): Promise<string> => {
  if (isBrowser()) {
    return await sha256Browser(value);
  } else {
    return await sha256Node(value);
  }
};

const sha256Node = async (value: string): Promise<string> => {
  const crypto = await import('crypto');
  return crypto
    .createHash('sha256')
    .update(value, 'utf8')
    .digest()
    .toString('hex');
};

const sha256Browser = async (value: string): Promise<string> => {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
};

export default sha256Async;
