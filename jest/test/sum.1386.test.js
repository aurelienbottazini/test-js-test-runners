const sum = require('../sum');

test('adds 5 + 33 to equal 38', () => {
  expect(sum(5, 33)).toBe(38);
});