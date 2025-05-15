const sum202 = require('../sum202.js');

test('adds 15 + 74 to equal 89 + offset 0.9482409235308178', () => {
  expect(sum202(15, 74)).toBe(89 + 0.9482409235308178);
});