const sum = require('../sum');

test('adds 71 + 13 to equal 84', () => {
  expect(sum(71, 13)).toBe(84);
});