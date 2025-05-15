const sum = require('../sum');

test('adds 49 + 35 to equal 84', () => {
  expect(sum(49, 35)).toBe(84);
});