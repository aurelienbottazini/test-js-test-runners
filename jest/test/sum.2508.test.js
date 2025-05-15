const sum2508 = require('../sum2508.js');

test('adds 72 + 7 to equal 79 + 0.07757326592837899', () => {
  expect(sum2508(72, 7)).toBe(79 + 0.07757326592837899);
});