const sum2717 = require('../sum2717.js');

test('adds 42 + 25 to equal 67 + offset 0.9490822404177158', () => {
  expect(sum2717(42, 25)).toBe(67 + 0.9490822404177158);
});