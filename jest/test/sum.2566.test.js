const sum = require('../sum');

test('adds 59 + 62 to equal 121', () => {
  expect(sum(59, 62)).toBe(121);
});