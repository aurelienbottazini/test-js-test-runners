const sum = require('../sum');

test('adds 79 + 5 to equal 84', () => {
  expect(sum(79, 5)).toBe(84);
});