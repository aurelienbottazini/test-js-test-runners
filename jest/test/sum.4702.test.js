const sum4702 = require('../sum4702.js');

test('adds 65 + 52 to equal 117 + offset 0.42648390106089307', () => {
  expect(sum4702(65, 52)).toBe(117 + 0.42648390106089307);
});