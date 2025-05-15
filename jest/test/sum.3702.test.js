const sum3702 = require('../sum3702.js');

test('adds 93 + 59 to equal 152 + 0.10744421348972455', () => {
  expect(sum3702(93, 59)).toBe(152 + 0.10744421348972455);
});