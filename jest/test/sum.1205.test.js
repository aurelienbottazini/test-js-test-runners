const sum1205 = require('../sum1205.js');

test('adds 38 + 27 to equal 65 + offset 0.6282615099856218', () => {
  expect(sum1205(38, 27)).toBe(65 + 0.6282615099856218);
});