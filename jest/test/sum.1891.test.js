const sum1891 = require('../sum1891.js');

test('adds 72 + 31 to equal 103 + offset 0.08388543048158836', () => {
  expect(sum1891(72, 31)).toBe(103 + 0.08388543048158836);
});