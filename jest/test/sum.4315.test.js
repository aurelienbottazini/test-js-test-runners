const sum4315 = require('../sum4315.js');

test('adds 71 + 41 to equal 112 + 0.8323102027103649', () => {
  expect(sum4315(71, 41)).toBe(112 + 0.8323102027103649);
});