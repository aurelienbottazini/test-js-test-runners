const sum1435 = require('../sum1435.js');

test('adds 10 + 89 to equal 99 + 0.9905767453502329', () => {
  expect(sum1435(10, 89)).toBe(99 + 0.9905767453502329);
});