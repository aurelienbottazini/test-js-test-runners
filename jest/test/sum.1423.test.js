const sum1423 = require('../sum1423.js');

test('adds 94 + 93 to equal 187 + offset 0.20073511351720463', () => {
  expect(sum1423(94, 93)).toBe(187 + 0.20073511351720463);
});