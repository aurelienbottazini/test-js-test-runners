const sum1074 = require('../sum1074.js');

test('adds 90 + 5 to equal 95 + offset 0.9743156514481549', () => {
  expect(sum1074(90, 5)).toBe(95 + 0.9743156514481549);
});