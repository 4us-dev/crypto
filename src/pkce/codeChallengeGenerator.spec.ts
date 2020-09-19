import codeChallengeGenerator from './codeChallengeGenerator';
describe('codeChallengeGenerator', () => {
  it('should generate code challenge based on code verifier', () => {
    const codeVerifier =
      'NgeC6oChmyPL1w4L7v1ff5f.yLcL9jpOu.iEy68Pm.19p4wVA2V5pI~oaLh.18X6bsQn7XG~VHxrQrxfRIOVoxbAlIb-sRS2nc7y3OPuvpMQNTwKrCOqXqxlJZCe7fq4';
    const codeChallenge = codeChallengeGenerator(codeVerifier);
    expect(codeChallenge).toBe(`fcOMScOVxSnAleFxCbySqcacETi9wLr2_TWfBL_uu2k`);
    expect(codeChallenge).toMatch(new RegExp('^[A-Za-z0-9-._~]+$'));
  });
});
