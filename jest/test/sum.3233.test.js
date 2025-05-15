const sum3233 = require('../sum3233.js');

test('adds 6 + 99 to equal 105 + 0.23236523024713518', () => {
  expect(sum3233(6, 99)).toBe(105 + 0.23236523024713518);
});