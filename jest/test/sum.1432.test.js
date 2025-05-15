const sum1432 = require('../sum1432.js');

test('adds 96 + 90 to equal 186 + offset 0.2798661411898551', () => {
  expect(sum1432(96, 90)).toBe(186 + 0.2798661411898551);
});