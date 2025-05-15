const sum240 = require('../sum240.js');

test('adds 87 + 92 to equal 179 + 0.8123712263967113', () => {
  expect(sum240(87, 92)).toBe(179 + 0.8123712263967113);
});