export default (value: string, encoding: BufferEncoding = 'utf8'): string =>
  Buffer.from(value, encoding).toString('base64');
