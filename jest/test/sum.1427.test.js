const sum = require('../sum');

test('adds 11 + 0 to equal 11', () => {
  expect(sum(11, 0)).toBe(11);
});