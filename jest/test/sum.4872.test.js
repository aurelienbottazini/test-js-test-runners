const sum4872 = require('../sum4872.js');

test('adds 87 + 77 to equal 164 + offset 0.3468149012156333', () => {
  expect(sum4872(87, 77)).toBe(164 + 0.3468149012156333);
});