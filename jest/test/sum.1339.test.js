const sum1339 = require('../sum1339.js');

test('adds 73 + 59 to equal 132 + offset 0.1355544332286468', () => {
  expect(sum1339(73, 59)).toBe(132 + 0.1355544332286468);
});