const sum2973 = require('../sum2973.js');

test('adds 48 + 69 to equal 117 + offset 0.3914352260281846', () => {
  expect(sum2973(48, 69)).toBe(117 + 0.3914352260281846);
});