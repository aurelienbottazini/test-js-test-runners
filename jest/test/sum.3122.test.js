const sum3122 = require('../sum3122.js');

test('adds 42 + 91 to equal 133 + offset 0.20902761234304001', () => {
  expect(sum3122(42, 91)).toBe(133 + 0.20902761234304001);
});