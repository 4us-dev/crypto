import decode from './decode';
describe('base64url', () => {
  it('should generate base64url', () => {
    const base64urlencoded =
      'TmdlQzZvQ2hteVBMMXc0TDd2MWZmNWYueUxjTDlqcE91LmlFeTY4UG0uMTlwNHdWQTJWNXBJfm9hTGguMThYNmJzUW43WEd-Vkh4clFyeGZSSU9Wb3hiQWxJYi1zUlMybmM3eTNPUHV2cE1RTlR3S3JDT3FYcXhsSlpDZTdmcTQ';
    const value = decode(base64urlencoded);
    expect(value).toBe(
      'NgeC6oChmyPL1w4L7v1ff5f.yLcL9jpOu.iEy68Pm.19p4wVA2V5pI~oaLh.18X6bsQn7XG~VHxrQrxfRIOVoxbAlIb-sRS2nc7y3OPuvpMQNTwKrCOqXqxlJZCe7fq4'
    );
  });

  it('should throw error when base64urlencoded contains "=" caracter', () => {
    const base64urlencoded =
      'TmdlQzZvQ2hteVBMMXc0TDd2MWZmNWYueUxjTDlqcE91LmlFeTY4UG0uMTlwNHdWQTJWNXBJfm9hTGguMThYNmJzUW43WEd-Vkh4clFyeGZSSU9Wb3hiQWxJYi1zUlMybmM3eTNPUHV2cE1RTlR3S3JDT3FYcXhsSlpDZTdmcTQ=';

    expect(() => decode(base64urlencoded)).toThrowError(
      'value is not a valid base64url encoded string'
    );
  });

  it('should throw error when base64urlencoded contains "+" caracter', () => {
    const base64urlencoded =
      'TmdlQzZvQ2hteVBMMXc0TDd2MWZmNWYueUxjTDlqcE91LmlFeTY4UG0uMTlwNHdWQTJWNXBJfm9hTGguMThYNmJzUW43WEd+Vkh4clFyeGZSSU9Wb3hiQWxJYi1zUlMybmM3eTNPUHV2cE1RTlR3S3JDT3FYcXhsSlpDZTdmcTQ';

    expect(() => decode(base64urlencoded)).toThrowError(
      'value is not a valid base64url encoded string'
    );
  });

  it('should throw error when base64urlencoded contains "~" caracter', () => {
    const base64urlencoded =
      'TmdlQzZvQ2hteVBMMXc0TDd2MWZmNWYueUxjTDlqcE91LmlFeTY4UG0uMTlwNHdWQTJWNXBJfm9hTGguMThYNmJzUW43WEd~Vkh4clFyeGZSSU9Wb3hiQWxJYi1zUlMybmM3eTNPUHV2cE1RTlR3S3JDT3FYcXhsSlpDZTdmcTQ';

    expect(() => decode(base64urlencoded)).toThrowError(
      'value is not a valid base64url encoded string'
    );
  });
});
