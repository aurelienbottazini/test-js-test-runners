const sum = require('../sum');

test('adds 66 + 61 to equal 127', () => {
  expect(sum(66, 61)).toBe(127);
});