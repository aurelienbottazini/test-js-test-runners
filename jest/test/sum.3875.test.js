const sum = require('../sum');

test('adds 79 + 23 to equal 102', () => {
  expect(sum(79, 23)).toBe(102);
});