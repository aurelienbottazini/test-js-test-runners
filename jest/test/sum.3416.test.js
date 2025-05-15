const sum3416 = require('../sum3416.js');

test('adds 44 + 21 to equal 65 + 0.43381788212724504', () => {
  expect(sum3416(44, 21)).toBe(65 + 0.43381788212724504);
});