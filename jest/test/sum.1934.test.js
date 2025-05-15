const sum1934 = require('../sum1934.js');

test('adds 69 + 94 to equal 163 + 0.7797777089421009', () => {
  expect(sum1934(69, 94)).toBe(163 + 0.7797777089421009);
});