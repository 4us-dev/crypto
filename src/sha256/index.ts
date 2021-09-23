import crypto from 'crypto';
import isBrowser from '../isBrowser';

const sha256 = (value: string, encoding: BufferEncoding = 'hex'): string => {
  if (isBrowser()) {
    throw new Error(
      'No support for sha256() in the browser, use sha256Async()'
    );
  }
  return crypto
    .createHash('sha256')
    .update(value, 'utf8')
    .digest()
    .toString(encoding);
};

export default sha256;
