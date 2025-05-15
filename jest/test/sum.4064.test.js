const sum = require('../sum');

test('adds 84 + 18 to equal 102', () => {
  expect(sum(84, 18)).toBe(102);
});