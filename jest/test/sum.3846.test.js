const sum3846 = require('../sum3846.js');

test('adds 48 + 75 to equal 123 + 0.39051972319241235', () => {
  expect(sum3846(48, 75)).toBe(123 + 0.39051972319241235);
});