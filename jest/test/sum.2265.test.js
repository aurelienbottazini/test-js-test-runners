const sum2265 = require('../sum2265.js');

test('adds 66 + 0 to equal 66 + 0.1863562492075277', () => {
  expect(sum2265(66, 0)).toBe(66 + 0.1863562492075277);
});