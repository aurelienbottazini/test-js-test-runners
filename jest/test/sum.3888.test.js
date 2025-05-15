const sum = require('../sum');

test('adds 40 + 44 to equal 84', () => {
  expect(sum(40, 44)).toBe(84);
});