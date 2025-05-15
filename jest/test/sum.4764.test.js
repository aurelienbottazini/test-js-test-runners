const sum = require('../sum');

test('adds 50 + 52 to equal 102', () => {
  expect(sum(50, 52)).toBe(102);
});