import crypto from 'crypto';

const sha256 = (value: string, encoding: BufferEncoding = 'hex'): string => {
  return crypto
    .createHash('sha256')
    .update(value, 'utf8')
    .digest()
    .toString(encoding);
};

export default sha256;
