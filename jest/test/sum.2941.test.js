const sum2941 = require('../sum2941.js');

test('adds 87 + 31 to equal 118 + offset 0.791612682652709', () => {
  expect(sum2941(87, 31)).toBe(118 + 0.791612682652709);
});