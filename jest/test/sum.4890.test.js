const sum4890 = require('../sum4890.js');

test('adds 48 + 64 to equal 112 + offset 0.7225375631392932', () => {
  expect(sum4890(48, 64)).toBe(112 + 0.7225375631392932);
});