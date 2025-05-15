const sum = require('../sum');

test('adds 3 + 11 to equal 14', () => {
  expect(sum(3, 11)).toBe(14);
});