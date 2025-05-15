const sum2702 = require('../sum2702.js');

test('adds 60 + 56 to equal 116 + offset 0.5808052569124861', () => {
  expect(sum2702(60, 56)).toBe(116 + 0.5808052569124861);
});