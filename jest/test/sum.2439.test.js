const sum = require('../sum');

test('adds 21 + 97 to equal 118', () => {
  expect(sum(21, 97)).toBe(118);
});