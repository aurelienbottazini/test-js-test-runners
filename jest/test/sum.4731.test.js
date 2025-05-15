const sum = require('../sum');

test('adds 20 + 64 to equal 84', () => {
  expect(sum(20, 64)).toBe(84);
});