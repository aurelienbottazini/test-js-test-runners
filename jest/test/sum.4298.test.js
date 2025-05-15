const sum4298 = require('../sum4298.js');

test('adds 39 + 95 to equal 134 + 0.9629223802970261', () => {
  expect(sum4298(39, 95)).toBe(134 + 0.9629223802970261);
});