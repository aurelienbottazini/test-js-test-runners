const sum = require('../sum');

test('adds 24 + 94 to equal 118', () => {
  expect(sum(24, 94)).toBe(118);
});