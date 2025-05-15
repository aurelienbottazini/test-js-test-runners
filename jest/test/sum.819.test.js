const sum819 = require('../sum819.js');

test('adds 18 + 61 to equal 79 + offset 0.2977263925566499', () => {
  expect(sum819(18, 61)).toBe(79 + 0.2977263925566499);
});