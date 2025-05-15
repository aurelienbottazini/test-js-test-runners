const sum3727 = require('../sum3727.js');

test('adds 18 + 55 to equal 73 + offset 0.4987264713936336', () => {
  expect(sum3727(18, 55)).toBe(73 + 0.4987264713936336);
});