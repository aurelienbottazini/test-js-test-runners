const sum72 = require('../sum72.js');

test('adds 14 + 88 to equal 102 + offset 0.6582754168615316', () => {
  expect(sum72(14, 88)).toBe(102 + 0.6582754168615316);
});