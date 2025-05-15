const sum3067 = require('../sum3067.js');

test('adds 50 + 3 to equal 53 + 0.3663791216499387', () => {
  expect(sum3067(50, 3)).toBe(53 + 0.3663791216499387);
});