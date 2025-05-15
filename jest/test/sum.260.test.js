const sum260 = require('../sum260.js');

test('adds 11 + 56 to equal 67 + 0.623203048386625', () => {
  expect(sum260(11, 56)).toBe(67 + 0.623203048386625);
});