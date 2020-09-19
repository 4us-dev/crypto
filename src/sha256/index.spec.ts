import sha256 from './index';
describe('sha256', () => {
  it('should hash to sha256', () => {
    const value = '4us dev';
    const actual = sha256(value);
    expect(actual).toBe(
      '9c8813f0ca966480ebd17668f7850c85930e9a5e2425a71d9b1125c9026edf3d'
    );
  });

  it('should hash to sha256 in base64', () => {
    const value = '4us dev';
    const actual = sha256(value, 'base64');
    expect(actual).toBe('nIgT8MqWZIDr0XZo94UMhZMOml4kJacdmxElyQJu3z0=');
  });
});
