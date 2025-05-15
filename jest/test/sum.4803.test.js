const sum4803 = require('../sum4803.js');

test('adds 77 + 87 to equal 164 + 0.3337048664027614', () => {
  expect(sum4803(77, 87)).toBe(164 + 0.3337048664027614);
});