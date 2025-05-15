const sum3839 = require('../sum3839.js');

test('adds 68 + 41 to equal 109 + 0.4448474299754579', () => {
  expect(sum3839(68, 41)).toBe(109 + 0.4448474299754579);
});