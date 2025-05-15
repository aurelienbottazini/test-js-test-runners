const sum822 = require('../sum822.js');

test('adds 26 + 37 to equal 63 + 0.8193409393210335', () => {
  expect(sum822(26, 37)).toBe(63 + 0.8193409393210335);
});