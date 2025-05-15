const sum = require('../sum');

test('adds 50 + 34 to equal 84', () => {
  expect(sum(50, 34)).toBe(84);
});