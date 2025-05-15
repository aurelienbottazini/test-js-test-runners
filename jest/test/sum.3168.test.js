const sum3168 = require('../sum3168.js');

test('adds 76 + 18 to equal 94 + offset 0.6257895593521754', () => {
  expect(sum3168(76, 18)).toBe(94 + 0.6257895593521754);
});