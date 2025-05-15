const sum = require('../sum');

test('adds 6 + 78 to equal 84', () => {
  expect(sum(6, 78)).toBe(84);
});