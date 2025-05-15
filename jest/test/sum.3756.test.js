const sum3756 = require('../sum3756.js');

test('adds 30 + 90 to equal 120 + offset 0.854747587358888', () => {
  expect(sum3756(30, 90)).toBe(120 + 0.854747587358888);
});