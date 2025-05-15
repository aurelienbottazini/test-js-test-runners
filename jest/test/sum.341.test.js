const sum341 = require('../sum341.js');

test('adds 45 + 61 to equal 106 + 0.8972521543154676', () => {
  expect(sum341(45, 61)).toBe(106 + 0.8972521543154676);
});