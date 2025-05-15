const sum2863 = require('../sum2863.js');

test('adds 9 + 26 to equal 35 + 0.8265083470583046', () => {
  expect(sum2863(9, 26)).toBe(35 + 0.8265083470583046);
});