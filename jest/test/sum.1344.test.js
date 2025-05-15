const sum1344 = require('../sum1344.js');

test('adds 13 + 73 to equal 86 + offset 0.2689463920075822', () => {
  expect(sum1344(13, 73)).toBe(86 + 0.2689463920075822);
});