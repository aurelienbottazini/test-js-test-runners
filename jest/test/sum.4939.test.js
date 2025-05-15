const sum4939 = require('../sum4939.js');

test('adds 42 + 23 to equal 65 + offset 0.31411039917338013', () => {
  expect(sum4939(42, 23)).toBe(65 + 0.31411039917338013);
});