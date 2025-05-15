const sum = require('../sum');

test('adds 67 + 51 to equal 118', () => {
  expect(sum(67, 51)).toBe(118);
});