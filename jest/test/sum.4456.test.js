const sum = require('../sum');

test('adds 74 + 10 to equal 84', () => {
  expect(sum(74, 10)).toBe(84);
});