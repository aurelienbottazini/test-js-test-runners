const sum394 = require('../sum394.js');

test('adds 78 + 76 to equal 154 + offset 0.5013200689337381', () => {
  expect(sum394(78, 76)).toBe(154 + 0.5013200689337381);
});