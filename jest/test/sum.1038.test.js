const sum = require('../sum');

test('adds 53 + 65 to equal 118', () => {
  expect(sum(53, 65)).toBe(118);
});