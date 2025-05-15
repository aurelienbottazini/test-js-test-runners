const sum4775 = require('../sum4775.js');

test('adds 38 + 43 to equal 81 + offset 0.23526933084613155', () => {
  expect(sum4775(38, 43)).toBe(81 + 0.23526933084613155);
});