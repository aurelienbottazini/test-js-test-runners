const sum2035 = require('../sum2035.js');

test('adds 52 + 74 to equal 126 + 0.9734493204861637', () => {
  expect(sum2035(52, 74)).toBe(126 + 0.9734493204861637);
});