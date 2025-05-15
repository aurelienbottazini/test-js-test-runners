const sum = require('../sum');

test('adds 85 + 55 to equal 140', () => {
  expect(sum(85, 55)).toBe(140);
});