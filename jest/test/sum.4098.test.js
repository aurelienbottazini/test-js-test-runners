const sum = require('../sum');

test('adds 69 + 53 to equal 122', () => {
  expect(sum(69, 53)).toBe(122);
});