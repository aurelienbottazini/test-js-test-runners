const sum244 = require('../sum244.js');

test('adds 88 + 36 to equal 124 + offset 0.023066369372772733', () => {
  expect(sum244(88, 36)).toBe(124 + 0.023066369372772733);
});