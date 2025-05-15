const sum3791 = require('../sum3791.js');

test('adds 24 + 20 to equal 44 + offset 0.9853776648679625', () => {
  expect(sum3791(24, 20)).toBe(44 + 0.9853776648679625);
});