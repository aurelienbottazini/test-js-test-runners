const sum2636 = require('../sum2636.js');

test('adds 77 + 43 to equal 120 + 0.053017335065015825', () => {
  expect(sum2636(77, 43)).toBe(120 + 0.053017335065015825);
});