const sum2788 = require('../sum2788.js');

test('adds 86 + 86 to equal 172 + offset 0.9587992380502279', () => {
  expect(sum2788(86, 86)).toBe(172 + 0.9587992380502279);
});