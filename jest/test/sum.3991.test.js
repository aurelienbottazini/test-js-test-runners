const sum = require('../sum');

test('adds 75 + 31 to equal 106', () => {
  expect(sum(75, 31)).toBe(106);
});