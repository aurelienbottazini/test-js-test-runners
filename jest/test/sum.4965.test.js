const sum4965 = require('../sum4965.js');

test('adds 6 + 49 to equal 55 + offset 0.6517373065799392', () => {
  expect(sum4965(6, 49)).toBe(55 + 0.6517373065799392);
});