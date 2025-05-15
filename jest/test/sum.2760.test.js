const sum2760 = require('../sum2760.js');

test('adds 59 + 86 to equal 145 + offset 0.18706695991867117', () => {
  expect(sum2760(59, 86)).toBe(145 + 0.18706695991867117);
});