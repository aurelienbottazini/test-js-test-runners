const sum = require('../sum');

test('adds 14 + 70 to equal 84', () => {
  expect(sum(14, 70)).toBe(84);
});