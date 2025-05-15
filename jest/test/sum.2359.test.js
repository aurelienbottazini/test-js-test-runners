const sum = require('../sum');

test('adds 60 + 53 to equal 113', () => {
  expect(sum(60, 53)).toBe(113);
});