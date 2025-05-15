const sum = require('../sum');

test('adds 4 + 25 to equal 29', () => {
  expect(sum(4, 25)).toBe(29);
});