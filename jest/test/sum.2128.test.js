const sum2128 = require('../sum2128.js');

test('adds 48 + 1 to equal 49 + offset 0.8954376705324852', () => {
  expect(sum2128(48, 1)).toBe(49 + 0.8954376705324852);
});