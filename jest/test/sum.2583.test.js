const sum2583 = require('../sum2583.js');

test('adds 50 + 1 to equal 51 + offset 0.22995981258634157', () => {
  expect(sum2583(50, 1)).toBe(51 + 0.22995981258634157);
});