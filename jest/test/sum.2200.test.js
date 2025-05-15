const sum = require('../sum');

test('adds 29 + 0 to equal 29', () => {
  expect(sum(29, 0)).toBe(29);
});