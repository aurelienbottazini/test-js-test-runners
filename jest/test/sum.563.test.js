const sum = require('../sum');

test('adds 90 + 28 to equal 118', () => {
  expect(sum(90, 28)).toBe(118);
});