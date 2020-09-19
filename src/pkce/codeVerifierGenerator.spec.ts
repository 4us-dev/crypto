import codeVerifierGenerator from './codeVerifierGenerator';
describe('codeVerifierGenerator', () => {
  it('should generate code verifier with length default', () => {
    const codeVerifier = codeVerifierGenerator();
    expect(codeVerifier).toHaveLength(128);
    expect(codeVerifier).toMatch(new RegExp('^[A-Za-z0-9-._~]+$'));
  });

  it('should generate code verifier with min length allowed', () => {
    const codeVerifier = codeVerifierGenerator(43);
    expect(codeVerifier).toHaveLength(43);
    expect(codeVerifier).toMatch(new RegExp('^[A-Za-z0-9-._~]+$'));
  });

  it('should throw an error if size is less than the minimum allowed', () => {
    expect(() => codeVerifierGenerator(42)).toThrowError(
      'the code verifier must be between 43 and 128 characters long.'
    );
  });

  it('should throw an error if size is bigger than the maximum allowed', () => {
    expect(() => codeVerifierGenerator(129)).toThrowError(
      'the code verifier must be between 43 and 128 characters long.'
    );
  });
});
