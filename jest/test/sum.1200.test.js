const sum = require('../sum');

test('adds 29 + 97 to equal 126', () => {
  expect(sum(29, 97)).toBe(126);
});