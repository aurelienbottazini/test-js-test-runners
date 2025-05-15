const sum699 = require('../sum699.js');

test('adds 59 + 87 to equal 146 + offset 0.4119863654001479', () => {
  expect(sum699(59, 87)).toBe(146 + 0.4119863654001479);
});