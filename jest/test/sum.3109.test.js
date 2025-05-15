const sum3109 = require('../sum3109.js');

test('adds 25 + 95 to equal 120 + offset 0.5882038049438951', () => {
  expect(sum3109(25, 95)).toBe(120 + 0.5882038049438951);
});