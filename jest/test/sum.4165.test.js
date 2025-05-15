const sum4165 = require('../sum4165.js');

test('adds 39 + 51 to equal 90 + offset 0.20074305807813453', () => {
  expect(sum4165(39, 51)).toBe(90 + 0.20074305807813453);
});