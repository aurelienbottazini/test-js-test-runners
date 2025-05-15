const sum357 = require('../sum357.js');

test('adds 12 + 41 to equal 53 + offset 0.3179606383932688', () => {
  expect(sum357(12, 41)).toBe(53 + 0.3179606383932688);
});