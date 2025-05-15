const sum1048 = require('../sum1048.js');

test('adds 37 + 20 to equal 57 + offset 0.30493797153592317', () => {
  expect(sum1048(37, 20)).toBe(57 + 0.30493797153592317);
});