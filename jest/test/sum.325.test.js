const sum325 = require('../sum325.js');

test('adds 46 + 74 to equal 120 + offset 0.05442736044243246', () => {
  expect(sum325(46, 74)).toBe(120 + 0.05442736044243246);
});