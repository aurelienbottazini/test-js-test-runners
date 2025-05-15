const sum = require('../sum');

test('adds 77 + 53 to equal 130', () => {
  expect(sum(77, 53)).toBe(130);
});