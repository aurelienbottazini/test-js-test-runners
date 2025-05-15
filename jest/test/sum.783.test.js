const sum = require('../sum');

test('adds 98 + 77 to equal 175', () => {
  expect(sum(98, 77)).toBe(175);
});