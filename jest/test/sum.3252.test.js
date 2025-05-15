const sum3252 = require('../sum3252.js');

test('adds 54 + 91 to equal 145 + offset 0.6480352595045223', () => {
  expect(sum3252(54, 91)).toBe(145 + 0.6480352595045223);
});