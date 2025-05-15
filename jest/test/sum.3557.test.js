const sum = require('../sum');

test('adds 39 + 88 to equal 127', () => {
  expect(sum(39, 88)).toBe(127);
});