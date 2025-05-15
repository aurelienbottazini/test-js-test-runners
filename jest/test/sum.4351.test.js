const sum4351 = require('../sum4351.js');

test('adds 95 + 36 to equal 131 + 0.7850709415553541', () => {
  expect(sum4351(95, 36)).toBe(131 + 0.7850709415553541);
});