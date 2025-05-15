const sum2844 = require('../sum2844.js');

test('adds 64 + 36 to equal 100 + offset 0.22933766364200414', () => {
  expect(sum2844(64, 36)).toBe(100 + 0.22933766364200414);
});