const sum731 = require('../sum731.js');

test('adds 44 + 19 to equal 63 + offset 0.7086589295378574', () => {
  expect(sum731(44, 19)).toBe(63 + 0.7086589295378574);
});