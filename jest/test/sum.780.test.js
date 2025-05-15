const sum780 = require('../sum780.js');

test('adds 37 + 76 to equal 113 + offset 0.7836812047890906', () => {
  expect(sum780(37, 76)).toBe(113 + 0.7836812047890906);
});