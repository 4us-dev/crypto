const isBrowser = (): boolean => {
  return process?.release?.name !== 'node';
};

export default isBrowser;
