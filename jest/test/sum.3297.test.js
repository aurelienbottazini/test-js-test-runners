const sum3297 = require('../sum3297.js');

test('adds 82 + 79 to equal 161 + offset 0.8036992338216559', () => {
  expect(sum3297(82, 79)).toBe(161 + 0.8036992338216559);
});