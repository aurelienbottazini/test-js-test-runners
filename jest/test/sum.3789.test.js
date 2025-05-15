const sum = require('../sum');

test('adds 10 + 75 to equal 85', () => {
  expect(sum(10, 75)).toBe(85);
});