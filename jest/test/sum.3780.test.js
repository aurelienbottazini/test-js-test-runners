const sum3780 = require('../sum3780.js');

test('adds 59 + 71 to equal 130 + offset 0.27223091328009363', () => {
  expect(sum3780(59, 71)).toBe(130 + 0.27223091328009363);
});