const sum782 = require('../sum782.js');

test('adds 22 + 94 to equal 116 + offset 0.9378944913226316', () => {
  expect(sum782(22, 94)).toBe(116 + 0.9378944913226316);
});