const sum = require('../sum');

test('adds 81 + 3 to equal 84', () => {
  expect(sum(81, 3)).toBe(84);
});