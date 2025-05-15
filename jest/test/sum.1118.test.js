const sum1118 = require('../sum1118.js');

test('adds 64 + 83 to equal 147 + 0.2943500545207923', () => {
  expect(sum1118(64, 83)).toBe(147 + 0.2943500545207923);
});