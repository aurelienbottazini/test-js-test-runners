const sum3591 = require('../sum3591.js');

test('adds 19 + 13 to equal 32 + 0.10218263201293187', () => {
  expect(sum3591(19, 13)).toBe(32 + 0.10218263201293187);
});