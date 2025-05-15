const sum1852 = require('../sum1852.js');

test('adds 68 + 38 to equal 106 + 0.5361659859992235', () => {
  expect(sum1852(68, 38)).toBe(106 + 0.5361659859992235);
});