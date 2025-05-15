const sum = require('../sum');

test('adds 35 + 18 to equal 53', () => {
  expect(sum(35, 18)).toBe(53);
});