const sum = require('../sum');

test('adds 10 + 74 to equal 84', () => {
  expect(sum(10, 74)).toBe(84);
});