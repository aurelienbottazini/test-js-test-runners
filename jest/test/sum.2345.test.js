const sum2345 = require('../sum2345.js');

test('adds 73 + 30 to equal 103 + offset 0.43210930965356575', () => {
  expect(sum2345(73, 30)).toBe(103 + 0.43210930965356575);
});