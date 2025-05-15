const sum3928 = require('../sum3928.js');

test('adds 92 + 44 to equal 136 + 0.2597246005399033', () => {
  expect(sum3928(92, 44)).toBe(136 + 0.2597246005399033);
});