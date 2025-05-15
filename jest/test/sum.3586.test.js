const sum = require('../sum');

test('adds 11 + 3 to equal 14', () => {
  expect(sum(11, 3)).toBe(14);
});