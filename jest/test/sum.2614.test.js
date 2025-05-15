const sum = require('../sum');

test('adds 66 + 18 to equal 84', () => {
  expect(sum(66, 18)).toBe(84);
});