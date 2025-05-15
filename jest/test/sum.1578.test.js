const sum1578 = require('../sum1578.js');

test('adds 99 + 23 to equal 122 + 0.8923046104942991', () => {
  expect(sum1578(99, 23)).toBe(122 + 0.8923046104942991);
});