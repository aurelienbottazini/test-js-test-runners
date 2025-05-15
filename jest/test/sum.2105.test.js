const sum2105 = require('../sum2105.js');

test('adds 89 + 40 to equal 129 + offset 0.5568687973235079', () => {
  expect(sum2105(89, 40)).toBe(129 + 0.5568687973235079);
});