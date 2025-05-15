const sum805 = require('../sum805.js');

test('adds 94 + 97 to equal 191 + 0.18961730245670927', () => {
  expect(sum805(94, 97)).toBe(191 + 0.18961730245670927);
});