const sum3792 = require('../sum3792.js');

test('adds 94 + 72 to equal 166 + 0.12612991425402542', () => {
  expect(sum3792(94, 72)).toBe(166 + 0.12612991425402542);
});