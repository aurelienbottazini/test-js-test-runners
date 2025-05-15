const sum4337 = require('../sum4337.js');

test('adds 31 + 86 to equal 117 + offset 0.21603115168283393', () => {
  expect(sum4337(31, 86)).toBe(117 + 0.21603115168283393);
});