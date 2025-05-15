const sum1237 = require('../sum1237.js');

test('adds 54 + 22 to equal 76 + offset 0.07680053663766762', () => {
  expect(sum1237(54, 22)).toBe(76 + 0.07680053663766762);
});