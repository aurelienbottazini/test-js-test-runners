const sum = require('../sum');

test('adds 70 + 88 to equal 158', () => {
  expect(sum(70, 88)).toBe(158);
});