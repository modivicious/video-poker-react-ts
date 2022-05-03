const setDelay = (ms: number): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default setDelay;
