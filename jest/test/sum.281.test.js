const sum = require('../sum');

test('adds 83 + 55 to equal 138', () => {
  expect(sum(83, 55)).toBe(138);
});