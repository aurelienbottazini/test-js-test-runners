const sum = require('../sum');

test('adds 89 + 29 to equal 118', () => {
  expect(sum(89, 29)).toBe(118);
});