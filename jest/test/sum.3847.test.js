const sum3847 = require('../sum3847.js');

test('adds 29 + 43 to equal 72 + offset 0.2529972072875334', () => {
  expect(sum3847(29, 43)).toBe(72 + 0.2529972072875334);
});