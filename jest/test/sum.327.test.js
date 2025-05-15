const sum327 = require('../sum327.js');

test('adds 27 + 35 to equal 62 + offset 0.09901976815178914', () => {
  expect(sum327(27, 35)).toBe(62 + 0.09901976815178914);
});