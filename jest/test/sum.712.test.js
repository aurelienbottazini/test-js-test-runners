const sum712 = require('../sum712.js');

test('adds 87 + 95 to equal 182 + offset 0.6952666809573215', () => {
  expect(sum712(87, 95)).toBe(182 + 0.6952666809573215);
});