const sum2697 = require('../sum2697.js');

test('adds 7 + 99 to equal 106 + offset 0.238094903880682', () => {
  expect(sum2697(7, 99)).toBe(106 + 0.238094903880682);
});