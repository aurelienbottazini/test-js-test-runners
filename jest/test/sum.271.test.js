const sum = require('../sum');

test('adds 69 + 49 to equal 118', () => {
  expect(sum(69, 49)).toBe(118);
});