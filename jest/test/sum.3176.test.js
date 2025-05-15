const sum = require('../sum');

test('adds 78 + 49 to equal 127', () => {
  expect(sum(78, 49)).toBe(127);
});