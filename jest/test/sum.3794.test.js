const sum = require('../sum');

test('adds 18 + 35 to equal 53', () => {
  expect(sum(18, 35)).toBe(53);
});