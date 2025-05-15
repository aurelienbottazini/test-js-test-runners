const sum2758 = require('../sum2758.js');

test('adds 3 + 60 to equal 63 + 0.9218372671973761', () => {
  expect(sum2758(3, 60)).toBe(63 + 0.9218372671973761);
});