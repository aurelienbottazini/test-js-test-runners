const sum1095 = require('../sum1095.js');

test('adds 80 + 72 to equal 152 + 0.6849061073952122', () => {
  expect(sum1095(80, 72)).toBe(152 + 0.6849061073952122);
});