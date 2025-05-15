const sum3879 = require('../sum3879.js');

test('adds 64 + 74 to equal 138 + offset 0.98242746443006', () => {
  expect(sum3879(64, 74)).toBe(138 + 0.98242746443006);
});