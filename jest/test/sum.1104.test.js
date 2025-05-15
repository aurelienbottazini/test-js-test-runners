const sum = require('../sum');

test('adds 21 + 0 to equal 21', () => {
  expect(sum(21, 0)).toBe(21);
});