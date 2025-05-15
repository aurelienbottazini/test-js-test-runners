const sum1667 = require('../sum1667.js');

test('adds 45 + 26 to equal 71 + 0.4912107345205412', () => {
  expect(sum1667(45, 26)).toBe(71 + 0.4912107345205412);
});