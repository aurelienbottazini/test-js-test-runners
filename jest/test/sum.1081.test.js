const sum = require('../sum');

test('adds 59 + 25 to equal 84', () => {
  expect(sum(59, 25)).toBe(84);
});