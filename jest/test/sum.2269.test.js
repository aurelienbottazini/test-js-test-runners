const sum2269 = require('../sum2269.js');

test('adds 92 + 59 to equal 151 + offset 0.21684173365138115', () => {
  expect(sum2269(92, 59)).toBe(151 + 0.21684173365138115);
});