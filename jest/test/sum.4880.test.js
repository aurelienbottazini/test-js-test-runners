const sum4880 = require('../sum4880.js');

test('adds 18 + 0 to equal 18 + 0.8886964087065743', () => {
  expect(sum4880(18, 0)).toBe(18 + 0.8886964087065743);
});