const sum3788 = require('../sum3788.js');

test('adds 53 + 46 to equal 99 + 0.6235592816889367', () => {
  expect(sum3788(53, 46)).toBe(99 + 0.6235592816889367);
});