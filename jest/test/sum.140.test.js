const sum140 = require('../sum140.js');

test('adds 58 + 90 to equal 148 + offset 0.2601840731094872', () => {
  expect(sum140(58, 90)).toBe(148 + 0.2601840731094872);
});