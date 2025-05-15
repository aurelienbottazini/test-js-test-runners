const sum2706 = require('../sum2706.js');

test('adds 94 + 37 to equal 131 + 0.5796612521844263', () => {
  expect(sum2706(94, 37)).toBe(131 + 0.5796612521844263);
});