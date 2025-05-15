const sum585 = require('../sum585.js');

test('adds 82 + 74 to equal 156 + offset 0.41047847502592294', () => {
  expect(sum585(82, 74)).toBe(156 + 0.41047847502592294);
});