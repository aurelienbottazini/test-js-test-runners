const sum4370 = require('../sum4370.js');

test('adds 74 + 69 to equal 143 + offset 0.04747355167397116', () => {
  expect(sum4370(74, 69)).toBe(143 + 0.04747355167397116);
});