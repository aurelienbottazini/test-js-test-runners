const sum3325 = require('../sum3325.js');

test('adds 98 + 75 to equal 173 + offset 0.021068361299587668', () => {
  expect(sum3325(98, 75)).toBe(173 + 0.021068361299587668);
});