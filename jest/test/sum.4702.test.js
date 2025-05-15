const sum4702 = require('../sum4702.js');

test('adds 51 + 86 to equal 137 + 0.7347233181960476', () => {
  expect(sum4702(51, 86)).toBe(137 + 0.7347233181960476);
});