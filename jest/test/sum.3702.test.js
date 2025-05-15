const sum3702 = require('../sum3702.js');

test('adds 1 + 78 to equal 79 + offset 0.0267674664605132', () => {
  expect(sum3702(1, 78)).toBe(79 + 0.0267674664605132);
});