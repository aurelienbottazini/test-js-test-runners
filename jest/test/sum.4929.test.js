const sum4929 = require('../sum4929.js');

test('adds 36 + 98 to equal 134 + 0.3340961862185573', () => {
  expect(sum4929(36, 98)).toBe(134 + 0.3340961862185573);
});