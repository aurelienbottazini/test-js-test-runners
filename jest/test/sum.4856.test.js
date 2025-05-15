const sum = require('../sum');

test('adds 65 + 62 to equal 127', () => {
  expect(sum(65, 62)).toBe(127);
});