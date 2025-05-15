const sum = require('../sum');

test('adds 12 + 72 to equal 84', () => {
  expect(sum(12, 72)).toBe(84);
});