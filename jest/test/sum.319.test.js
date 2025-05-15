const sum319 = require('../sum319.js');

test('adds 52 + 96 to equal 148 + offset 0.3477003765607414', () => {
  expect(sum319(52, 96)).toBe(148 + 0.3477003765607414);
});