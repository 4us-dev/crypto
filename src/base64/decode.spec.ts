import decode from './decode';
describe('base64 decode', () => {
  it('should decode base64', () => {
    const base64encoded =
      'TmdlQzZvQ2hteVBMMXc0TDd2MWZmNWYueUxjTDlqcE91LmlFeTY4UG0uMTlwNHdWQTJWNXBJfm9hTGguMThYNmJzUW43WEd+Vkh4clFyeGZSSU9Wb3hiQWxJYi1zUlMybmM3eTNPUHV2cE1RTlR3S3JDT3FYcXhsSlpDZTdmcTQ=';
    const value = decode(base64encoded);
    expect(value).toBe(
      'NgeC6oChmyPL1w4L7v1ff5f.yLcL9jpOu.iEy68Pm.19p4wVA2V5pI~oaLh.18X6bsQn7XG~VHxrQrxfRIOVoxbAlIb-sRS2nc7y3OPuvpMQNTwKrCOqXqxlJZCe7fq4'
    );
  });
});
