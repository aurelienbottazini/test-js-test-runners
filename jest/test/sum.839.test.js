const sum839 = require('../sum839.js');

test('adds 38 + 36 to equal 74 + offset 0.8829895101626501', () => {
  expect(sum839(38, 36)).toBe(74 + 0.8829895101626501);
});