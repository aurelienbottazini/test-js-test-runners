const sum = require('../sum');

test('adds 45 + 82 to equal 127', () => {
  expect(sum(45, 82)).toBe(127);
});