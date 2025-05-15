const sum = require('../sum');

test('adds 74 + 44 to equal 118', () => {
  expect(sum(74, 44)).toBe(118);
});