const sum4776 = require('../sum4776.js');

test('adds 27 + 76 to equal 103 + offset 0.5015969309452746', () => {
  expect(sum4776(27, 76)).toBe(103 + 0.5015969309452746);
});