const sum3961 = require('../sum3961.js');

test('adds 75 + 65 to equal 140 + offset 0.14400676009714664', () => {
  expect(sum3961(75, 65)).toBe(140 + 0.14400676009714664);
});