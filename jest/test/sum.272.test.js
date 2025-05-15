const sum = require('../sum');

test('adds 69 + 81 to equal 150', () => {
  expect(sum(69, 81)).toBe(150);
});