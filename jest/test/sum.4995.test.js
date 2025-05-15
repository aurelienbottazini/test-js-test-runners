const sum4995 = require('../sum4995.js');

test('adds 64 + 87 to equal 151 + 0.5974295004563163', () => {
  expect(sum4995(64, 87)).toBe(151 + 0.5974295004563163);
});