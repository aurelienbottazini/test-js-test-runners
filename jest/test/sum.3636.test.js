const sum3636 = require('../sum3636.js');

test('adds 16 + 19 to equal 35 + 0.3025237725693366', () => {
  expect(sum3636(16, 19)).toBe(35 + 0.3025237725693366);
});