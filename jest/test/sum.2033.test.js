const sum2033 = require('../sum2033.js');

test('adds 35 + 14 to equal 49 + 0.37820960540941173', () => {
  expect(sum2033(35, 14)).toBe(49 + 0.37820960540941173);
});