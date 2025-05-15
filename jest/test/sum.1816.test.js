const sum1816 = require('../sum1816.js');

test('adds 66 + 45 to equal 111 + offset 0.8971319477202238', () => {
  expect(sum1816(66, 45)).toBe(111 + 0.8971319477202238);
});