const sum2899 = require('../sum2899.js');

test('adds 83 + 58 to equal 141 + offset 0.0893277328311105', () => {
  expect(sum2899(83, 58)).toBe(141 + 0.0893277328311105);
});