const sum4100 = require('../sum4100.js');

test('adds 19 + 77 to equal 96 + offset 0.9527895478510057', () => {
  expect(sum4100(19, 77)).toBe(96 + 0.9527895478510057);
});