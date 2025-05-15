const sum2819 = require('../sum2819.js');

test('adds 16 + 10 to equal 26 + 0.18931961182095658', () => {
  expect(sum2819(16, 10)).toBe(26 + 0.18931961182095658);
});