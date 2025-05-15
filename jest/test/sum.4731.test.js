const sum4731 = require('../sum4731.js');

test('adds 48 + 20 to equal 68 + 0.1044609945534225', () => {
  expect(sum4731(48, 20)).toBe(68 + 0.1044609945534225);
});