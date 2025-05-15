const sum1914 = require('../sum1914.js');

test('adds 23 + 95 to equal 118 + offset 0.3248959317292087', () => {
  expect(sum1914(23, 95)).toBe(118 + 0.3248959317292087);
});