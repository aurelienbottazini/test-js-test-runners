const sum4520 = require('../sum4520.js');

test('adds 91 + 47 to equal 138 + 0.8295306302209152', () => {
  expect(sum4520(91, 47)).toBe(138 + 0.8295306302209152);
});