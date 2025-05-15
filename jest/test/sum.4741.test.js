const sum = require('../sum');

test('adds 41 + 8 to equal 49', () => {
  expect(sum(41, 8)).toBe(49);
});