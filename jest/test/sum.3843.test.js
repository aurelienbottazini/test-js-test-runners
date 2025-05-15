const sum3843 = require('../sum3843.js');

test('adds 91 + 70 to equal 161 + offset 0.4479454965531159', () => {
  expect(sum3843(91, 70)).toBe(161 + 0.4479454965531159);
});