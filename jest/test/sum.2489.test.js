const sum2489 = require('../sum2489.js');

test('adds 43 + 23 to equal 66 + offset 0.21931355184519807', () => {
  expect(sum2489(43, 23)).toBe(66 + 0.21931355184519807);
});