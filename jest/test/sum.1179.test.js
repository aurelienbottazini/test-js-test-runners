const sum1179 = require('../sum1179.js');

test('adds 35 + 66 to equal 101 + 0.372577033787551', () => {
  expect(sum1179(35, 66)).toBe(101 + 0.372577033787551);
});