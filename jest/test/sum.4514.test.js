const sum4514 = require('../sum4514.js');

test('adds 43 + 44 to equal 87 + 0.8838580837508908', () => {
  expect(sum4514(43, 44)).toBe(87 + 0.8838580837508908);
});