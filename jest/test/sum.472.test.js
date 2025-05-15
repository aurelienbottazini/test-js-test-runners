const sum472 = require('../sum472.js');

test('adds 30 + 34 to equal 64 + 0.4267937501559921', () => {
  expect(sum472(30, 34)).toBe(64 + 0.4267937501559921);
});