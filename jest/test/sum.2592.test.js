const sum2592 = require('../sum2592.js');

test('adds 90 + 53 to equal 143 + 0.6283000478746008', () => {
  expect(sum2592(90, 53)).toBe(143 + 0.6283000478746008);
});