import { base64 } from '../index';

export const base64ToBase64Url = (value: string): string =>
  value.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const encode = (value: string): string =>
  base64ToBase64Url(base64.encode(value));

export default encode;
