const sum342 = require('../sum342.js');

test('adds 35 + 17 to equal 52 + offset 0.010556633453280728', () => {
  expect(sum342(35, 17)).toBe(52 + 0.010556633453280728);
});