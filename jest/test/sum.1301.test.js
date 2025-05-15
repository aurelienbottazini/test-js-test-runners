const sum = require('../sum');

test('adds 11 + 10 to equal 21', () => {
  expect(sum(11, 10)).toBe(21);
});