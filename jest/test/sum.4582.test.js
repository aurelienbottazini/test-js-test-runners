const sum = require('../sum');

test('adds 27 + 8 to equal 35', () => {
  expect(sum(27, 8)).toBe(35);
});