const sum835 = require('../sum835.js');

test('adds 41 + 53 to equal 94 + offset 0.09139370392521506', () => {
  expect(sum835(41, 53)).toBe(94 + 0.09139370392521506);
});