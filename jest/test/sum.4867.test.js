const sum4867 = require('../sum4867.js');

test('adds 28 + 0 to equal 28 + 0.016473443068030558', () => {
  expect(sum4867(28, 0)).toBe(28 + 0.016473443068030558);
});