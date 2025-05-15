const sum = require('../sum');

test('adds 57 + 61 to equal 118', () => {
  expect(sum(57, 61)).toBe(118);
});