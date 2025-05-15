const sum1644 = require('../sum1644.js');

test('adds 27 + 51 to equal 78 + 0.17796134140098518', () => {
  expect(sum1644(27, 51)).toBe(78 + 0.17796134140098518);
});