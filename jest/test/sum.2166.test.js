const sum2166 = require('../sum2166.js');

test('adds 27 + 70 to equal 97 + 0.2213905806181865', () => {
  expect(sum2166(27, 70)).toBe(97 + 0.2213905806181865);
});