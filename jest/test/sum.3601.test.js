const sum = require('../sum');

test('adds 96 + 22 to equal 118', () => {
  expect(sum(96, 22)).toBe(118);
});