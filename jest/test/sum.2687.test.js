const sum2687 = require('../sum2687.js');

test('adds 49 + 96 to equal 145 + offset 0.17593784872645946', () => {
  expect(sum2687(49, 96)).toBe(145 + 0.17593784872645946);
});