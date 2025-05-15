const sum1582 = require('../sum1582.js');

test('adds 92 + 23 to equal 115 + offset 0.05059216708397929', () => {
  expect(sum1582(92, 23)).toBe(115 + 0.05059216708397929);
});