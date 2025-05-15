const sum = require('../sum');

test('adds 33 + 51 to equal 84', () => {
  expect(sum(33, 51)).toBe(84);
});