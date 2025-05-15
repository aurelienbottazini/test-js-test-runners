const sum526 = require('../sum526.js');

test('adds 38 + 36 to equal 74 + offset 0.3297114866397183', () => {
  expect(sum526(38, 36)).toBe(74 + 0.3297114866397183);
});