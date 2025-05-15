const sum = require('../sum');

test('adds 34 + 79 to equal 113', () => {
  expect(sum(34, 79)).toBe(113);
});