const sum2774 = require('../sum2774.js');

test('adds 83 + 19 to equal 102 + offset 0.8915684223461832', () => {
  expect(sum2774(83, 19)).toBe(102 + 0.8915684223461832);
});