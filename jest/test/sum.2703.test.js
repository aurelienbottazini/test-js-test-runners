const sum2703 = require('../sum2703.js');

test('adds 94 + 73 to equal 167 + 0.03561273565329637', () => {
  expect(sum2703(94, 73)).toBe(167 + 0.03561273565329637);
});