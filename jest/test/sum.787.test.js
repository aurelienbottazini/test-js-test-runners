const sum = require('../sum');

test('adds 64 + 55 to equal 119', () => {
  expect(sum(64, 55)).toBe(119);
});