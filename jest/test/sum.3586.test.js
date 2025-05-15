const sum3586 = require('../sum3586.js');

test('adds 16 + 69 to equal 85 + offset 0.42546939456440513', () => {
  expect(sum3586(16, 69)).toBe(85 + 0.42546939456440513);
});