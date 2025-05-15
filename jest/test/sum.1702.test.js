const sum1702 = require('../sum1702.js');

test('adds 47 + 62 to equal 109 + 0.2797398120521347', () => {
  expect(sum1702(47, 62)).toBe(109 + 0.2797398120521347);
});