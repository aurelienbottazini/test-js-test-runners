const sum437 = require('../sum437.js');

test('adds 7 + 63 to equal 70 + 0.15075952748000665', () => {
  expect(sum437(7, 63)).toBe(70 + 0.15075952748000665);
});