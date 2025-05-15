const sum = require('../sum');

test('adds 35 + 8 to equal 43', () => {
  expect(sum(35, 8)).toBe(43);
});