const sum4621 = require('../sum4621.js');

test('adds 34 + 43 to equal 77 + offset 0.38852051855113845', () => {
  expect(sum4621(34, 43)).toBe(77 + 0.38852051855113845);
});