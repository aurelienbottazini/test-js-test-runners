const sum4978 = require('../sum4978.js');

test('adds 28 + 55 to equal 83 + offset 0.28383643172231043', () => {
  expect(sum4978(28, 55)).toBe(83 + 0.28383643172231043);
});