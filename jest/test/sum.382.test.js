const sum382 = require('../sum382.js');

test('adds 31 + 35 to equal 66 + 0.6905558975703845', () => {
  expect(sum382(31, 35)).toBe(66 + 0.6905558975703845);
});