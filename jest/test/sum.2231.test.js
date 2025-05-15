const sum = require('../sum');

test('adds 19 + 10 to equal 29', () => {
  expect(sum(19, 10)).toBe(29);
});