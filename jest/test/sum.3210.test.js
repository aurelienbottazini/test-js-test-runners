const sum3210 = require('../sum3210.js');

test('adds 22 + 94 to equal 116 + offset 0.5348409728423487', () => {
  expect(sum3210(22, 94)).toBe(116 + 0.5348409728423487);
});