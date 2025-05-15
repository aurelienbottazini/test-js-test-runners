const sum1669 = require('../sum1669.js');

test('adds 9 + 37 to equal 46 + offset 0.5521495095581646', () => {
  expect(sum1669(9, 37)).toBe(46 + 0.5521495095581646);
});