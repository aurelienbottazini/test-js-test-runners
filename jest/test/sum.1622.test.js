const sum1622 = require('../sum1622.js');

test('adds 10 + 34 to equal 44 + offset 0.5594023228857165', () => {
  expect(sum1622(10, 34)).toBe(44 + 0.5594023228857165);
});