const sum = require('../sum');

test('adds 85 + 33 to equal 118', () => {
  expect(sum(85, 33)).toBe(118);
});