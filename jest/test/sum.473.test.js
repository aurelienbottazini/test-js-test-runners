const sum = require('../sum');

test('adds 62 + 56 to equal 118', () => {
  expect(sum(62, 56)).toBe(118);
});