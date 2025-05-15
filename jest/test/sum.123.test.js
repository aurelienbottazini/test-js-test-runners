const sum123 = require('../sum123.js');

test('adds 66 + 73 to equal 139 + 0.5115810121285016', () => {
  expect(sum123(66, 73)).toBe(139 + 0.5115810121285016);
});