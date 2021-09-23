import isBrowser from './index';

describe('sha256Async', () => {
  it('should check if is browser', async () => {
    const actual = isBrowser();
    expect(actual).toBeFalsy();
  });
});
