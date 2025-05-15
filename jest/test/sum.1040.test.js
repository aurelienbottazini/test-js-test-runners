const sum1040 = require('../sum1040.js');

test('adds 56 + 96 to equal 152 + 0.6913102677221159', () => {
  expect(sum1040(56, 96)).toBe(152 + 0.6913102677221159);
});