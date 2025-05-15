const sum2346 = require('../sum2346.js');

test('adds 55 + 59 to equal 114 + offset 0.21755498266004003', () => {
  expect(sum2346(55, 59)).toBe(114 + 0.21755498266004003);
});