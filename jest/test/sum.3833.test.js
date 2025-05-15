const sum3833 = require('../sum3833.js');

test('adds 86 + 79 to equal 165 + offset 0.16151454717548552', () => {
  expect(sum3833(86, 79)).toBe(165 + 0.16151454717548552);
});