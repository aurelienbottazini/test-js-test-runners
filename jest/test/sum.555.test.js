const sum = require('../sum');

test('adds 89 + 81 to equal 170', () => {
  expect(sum(89, 81)).toBe(170);
});