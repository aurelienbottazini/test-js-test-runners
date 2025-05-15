const sum2383 = require('../sum2383.js');

test('adds 87 + 2 to equal 89 + 0.4650359956312138', () => {
  expect(sum2383(87, 2)).toBe(89 + 0.4650359956312138);
});