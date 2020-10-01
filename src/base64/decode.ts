export default (value: string): string =>
  Buffer.from(value, 'base64').toString('utf8');
