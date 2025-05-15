const sum3543 = require('../sum3543.js');

test('adds 12 + 19 to equal 31 + offset 0.9039177646511821', () => {
  expect(sum3543(12, 19)).toBe(31 + 0.9039177646511821);
});