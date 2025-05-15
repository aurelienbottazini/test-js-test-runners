const sum2796 = require('../sum2796.js');

test('adds 88 + 51 to equal 139 + offset 0.19851557327632507', () => {
  expect(sum2796(88, 51)).toBe(139 + 0.19851557327632507);
});