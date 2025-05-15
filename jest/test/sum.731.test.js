const sum731 = require('../sum731.js');

test('adds 73 + 55 to equal 128 + 0.14646745794336136', () => {
  expect(sum731(73, 55)).toBe(128 + 0.14646745794336136);
});