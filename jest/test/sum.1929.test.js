const sum1929 = require('../sum1929.js');

test('adds 62 + 81 to equal 143 + offset 0.8166708492262935', () => {
  expect(sum1929(62, 81)).toBe(143 + 0.8166708492262935);
});