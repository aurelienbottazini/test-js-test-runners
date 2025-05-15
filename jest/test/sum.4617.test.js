const sum = require('../sum');

test('adds 43 + 41 to equal 84', () => {
  expect(sum(43, 41)).toBe(84);
});