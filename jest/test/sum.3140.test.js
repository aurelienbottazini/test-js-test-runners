const sum3140 = require('../sum3140.js');

test('adds 73 + 73 to equal 146 + 0.842327218072411', () => {
  expect(sum3140(73, 73)).toBe(146 + 0.842327218072411);
});