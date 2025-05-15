const sum4392 = require('../sum4392.js');

test('adds 98 + 53 to equal 151 + offset 0.8921789604937073', () => {
  expect(sum4392(98, 53)).toBe(151 + 0.8921789604937073);
});