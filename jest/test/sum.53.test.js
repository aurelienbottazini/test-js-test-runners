const sum = require('../sum');

test('adds 5 + 14 to equal 19', () => {
  expect(sum(5, 14)).toBe(19);
});