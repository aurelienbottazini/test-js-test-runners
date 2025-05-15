const sum3000 = require('../sum3000.js');

test('adds 18 + 62 to equal 80 + offset 0.6244484403814242', () => {
  expect(sum3000(18, 62)).toBe(80 + 0.6244484403814242);
});