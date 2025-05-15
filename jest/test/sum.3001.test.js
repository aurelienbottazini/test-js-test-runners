const sum3001 = require('../sum3001.js');

test('adds 14 + 12 to equal 26 + 0.8192815581693778', () => {
  expect(sum3001(14, 12)).toBe(26 + 0.8192815581693778);
});