const sum1053 = require('../sum1053.js');

test('adds 93 + 22 to equal 115 + offset 0.6695818304688704', () => {
  expect(sum1053(93, 22)).toBe(115 + 0.6695818304688704);
});