const sum1187 = require('../sum1187.js');

test('adds 78 + 11 to equal 89 + 0.8054000262472903', () => {
  expect(sum1187(78, 11)).toBe(89 + 0.8054000262472903);
});