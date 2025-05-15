const sum3783 = require('../sum3783.js');

test('adds 39 + 94 to equal 133 + offset 0.8646397933987352', () => {
  expect(sum3783(39, 94)).toBe(133 + 0.8646397933987352);
});