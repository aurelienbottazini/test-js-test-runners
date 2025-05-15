const sum1621 = require('../sum1621.js');

test('adds 8 + 91 to equal 99 + offset 0.9586916870740227', () => {
  expect(sum1621(8, 91)).toBe(99 + 0.9586916870740227);
});