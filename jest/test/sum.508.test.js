const sum508 = require('../sum508.js');

test('adds 57 + 74 to equal 131 + 0.24925888452929412', () => {
  expect(sum508(57, 74)).toBe(131 + 0.24925888452929412);
});