const sum2490 = require('../sum2490.js');

test('adds 26 + 85 to equal 111 + offset 0.28171263132647617', () => {
  expect(sum2490(26, 85)).toBe(111 + 0.28171263132647617);
});