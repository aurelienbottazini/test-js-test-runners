const sum2599 = require('../sum2599.js');

test('adds 17 + 92 to equal 109 + offset 0.8546800747268519', () => {
  expect(sum2599(17, 92)).toBe(109 + 0.8546800747268519);
});