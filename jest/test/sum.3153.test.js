const sum3153 = require('../sum3153.js');

test('adds 96 + 18 to equal 114 + offset 0.48809512217155315', () => {
  expect(sum3153(96, 18)).toBe(114 + 0.48809512217155315);
});