const sum = require('../sum');

test('adds 91 + 53 to equal 144', () => {
  expect(sum(91, 53)).toBe(144);
});