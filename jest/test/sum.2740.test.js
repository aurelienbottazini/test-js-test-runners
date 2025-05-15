const sum2740 = require('../sum2740.js');

test('adds 63 + 80 to equal 143 + offset 0.06379037968377466', () => {
  expect(sum2740(63, 80)).toBe(143 + 0.06379037968377466);
});