const sum3910 = require('../sum3910.js');

test('adds 87 + 67 to equal 154 + offset 0.6964933608207888', () => {
  expect(sum3910(87, 67)).toBe(154 + 0.6964933608207888);
});