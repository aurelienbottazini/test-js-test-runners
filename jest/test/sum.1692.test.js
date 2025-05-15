const sum1692 = require('../sum1692.js');

test('adds 66 + 39 to equal 105 + 0.18112097857515363', () => {
  expect(sum1692(66, 39)).toBe(105 + 0.18112097857515363);
});