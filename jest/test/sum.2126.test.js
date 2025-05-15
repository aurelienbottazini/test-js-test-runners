const sum2126 = require('../sum2126.js');

test('adds 26 + 43 to equal 69 + 0.23033417082041707', () => {
  expect(sum2126(26, 43)).toBe(69 + 0.23033417082041707);
});