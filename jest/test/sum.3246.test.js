const sum = require('../sum');

test('adds 10 + 11 to equal 21', () => {
  expect(sum(10, 11)).toBe(21);
});