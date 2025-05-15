const sum185 = require('../sum185.js');

test('adds 75 + 23 to equal 98 + offset 0.4560473602763311', () => {
  expect(sum185(75, 23)).toBe(98 + 0.4560473602763311);
});