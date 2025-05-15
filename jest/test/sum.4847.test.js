const sum = require('../sum');

test('adds 3 + 26 to equal 29', () => {
  expect(sum(3, 26)).toBe(29);
});