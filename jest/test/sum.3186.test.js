const sum3186 = require('../sum3186.js');

test('adds 45 + 1 to equal 46 + offset 0.4336309581539003', () => {
  expect(sum3186(45, 1)).toBe(46 + 0.4336309581539003);
});