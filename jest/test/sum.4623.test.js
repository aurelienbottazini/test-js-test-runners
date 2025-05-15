const sum4623 = require('../sum4623.js');

test('adds 32 + 71 to equal 103 + 0.37048491645967774', () => {
  expect(sum4623(32, 71)).toBe(103 + 0.37048491645967774);
});