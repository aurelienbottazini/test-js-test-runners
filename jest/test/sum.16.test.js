const sum16 = require('../sum16.js');

test('adds 82 + 86 to equal 168 + 0.9317327593020424', () => {
  expect(sum16(82, 86)).toBe(168 + 0.9317327593020424);
});