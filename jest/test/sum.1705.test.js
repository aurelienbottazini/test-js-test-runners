const sum1705 = require('../sum1705.js');

test('adds 22 + 60 to equal 82 + 0.41333911319638017', () => {
  expect(sum1705(22, 60)).toBe(82 + 0.41333911319638017);
});