const sum = require('../sum');

test('adds 23 + 81 to equal 104', () => {
  expect(sum(23, 81)).toBe(104);
});