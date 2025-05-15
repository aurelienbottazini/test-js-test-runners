const sum = require('../sum');

test('adds 26 + 13 to equal 39', () => {
  expect(sum(26, 13)).toBe(39);
});