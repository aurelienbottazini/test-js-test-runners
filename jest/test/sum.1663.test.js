const sum = require('../sum');

test('adds 41 + 77 to equal 118', () => {
  expect(sum(41, 77)).toBe(118);
});