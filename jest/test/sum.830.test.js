const sum830 = require('../sum830.js');

test('adds 17 + 87 to equal 104 + offset 0.31995220325207263', () => {
  expect(sum830(17, 87)).toBe(104 + 0.31995220325207263);
});