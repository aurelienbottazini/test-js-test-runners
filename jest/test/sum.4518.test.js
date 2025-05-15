const sum = require('../sum');

test('adds 7 + 0 to equal 7', () => {
  expect(sum(7, 0)).toBe(7);
});