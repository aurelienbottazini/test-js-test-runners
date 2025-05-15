const sum2777 = require('../sum2777.js');

test('adds 69 + 25 to equal 94 + offset 0.06338916792069893', () => {
  expect(sum2777(69, 25)).toBe(94 + 0.06338916792069893);
});