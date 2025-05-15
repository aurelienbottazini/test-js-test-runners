const sum2772 = require('../sum2772.js');

test('adds 87 + 9 to equal 96 + offset 0.9795631403862943', () => {
  expect(sum2772(87, 9)).toBe(96 + 0.9795631403862943);
});