const sum = require('../sum');

test('adds 3 + 35 to equal 38', () => {
  expect(sum(3, 35)).toBe(38);
});