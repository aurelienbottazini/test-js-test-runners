const sum915 = require('../sum915.js');

test('adds 82 + 89 to equal 171 + offset 0.05693807827834907', () => {
  expect(sum915(82, 89)).toBe(171 + 0.05693807827834907);
});