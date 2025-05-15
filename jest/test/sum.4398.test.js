const sum = require('../sum');

test('adds 5 + 16 to equal 21', () => {
  expect(sum(5, 16)).toBe(21);
});