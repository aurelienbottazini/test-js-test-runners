const sum3432 = require('../sum3432.js');

test('adds 39 + 54 to equal 93 + offset 0.3533535848972992', () => {
  expect(sum3432(39, 54)).toBe(93 + 0.3533535848972992);
});