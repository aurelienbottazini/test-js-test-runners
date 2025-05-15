const sum3888 = require('../sum3888.js');

test('adds 22 + 84 to equal 106 + offset 0.5466506980023111', () => {
  expect(sum3888(22, 84)).toBe(106 + 0.5466506980023111);
});