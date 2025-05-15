const sum = require('../sum');

test('adds 0 + 84 to equal 84', () => {
  expect(sum(0, 84)).toBe(84);
});