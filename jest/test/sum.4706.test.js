const sum4706 = require('../sum4706.js');

test('adds 48 + 38 to equal 86 + offset 0.04937828434834812', () => {
  expect(sum4706(48, 38)).toBe(86 + 0.04937828434834812);
});