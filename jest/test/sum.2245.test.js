const sum2245 = require('../sum2245.js');

test('adds 1 + 66 to equal 67 + offset 0.4673092192273627', () => {
  expect(sum2245(1, 66)).toBe(67 + 0.4673092192273627);
});