import sha256Async from './index';
describe('sha256Async', () => {
  it('should hash to sha256Async', async () => {
    const value = '4us dev';
    const actual = await sha256Async(value);
    expect(actual).toBe(
      '9c8813f0ca966480ebd17668f7850c85930e9a5e2425a71d9b1125c9026edf3d'
    );
  });
});
