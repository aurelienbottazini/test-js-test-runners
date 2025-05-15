const sum = require('../sum');

test('adds 38 + 0 to equal 38', () => {
  expect(sum(38, 0)).toBe(38);
});