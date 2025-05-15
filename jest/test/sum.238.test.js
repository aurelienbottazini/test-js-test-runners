const sum238 = require('../sum238.js');

test('adds 64 + 88 to equal 152 + offset 0.9559460524388326', () => {
  expect(sum238(64, 88)).toBe(152 + 0.9559460524388326);
});