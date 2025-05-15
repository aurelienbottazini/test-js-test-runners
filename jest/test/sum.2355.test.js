const sum = require('../sum');

test('adds 1 + 83 to equal 84', () => {
  expect(sum(1, 83)).toBe(84);
});