const sum4351 = require('../sum4351.js');

test('adds 39 + 4 to equal 43 + offset 0.4017233920709674', () => {
  expect(sum4351(39, 4)).toBe(43 + 0.4017233920709674);
});