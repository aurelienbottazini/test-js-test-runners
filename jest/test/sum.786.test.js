const sum = require('../sum');

test('adds 45 + 41 to equal 86', () => {
  expect(sum(45, 41)).toBe(86);
});