const sum = require('../sum');

test('adds 30 + 88 to equal 118', () => {
  expect(sum(30, 88)).toBe(118);
});