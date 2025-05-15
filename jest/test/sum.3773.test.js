const sum3773 = require('../sum3773.js');

test('adds 53 + 77 to equal 130 + offset 0.9318022288736312', () => {
  expect(sum3773(53, 77)).toBe(130 + 0.9318022288736312);
});