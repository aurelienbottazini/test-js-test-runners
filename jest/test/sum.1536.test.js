const sum1536 = require('../sum1536.js');

test('adds 87 + 14 to equal 101 + offset 0.8183926432345304', () => {
  expect(sum1536(87, 14)).toBe(101 + 0.8183926432345304);
});