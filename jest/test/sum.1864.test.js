const sum1864 = require('../sum1864.js');

test('adds 74 + 20 to equal 94 + offset 0.7055055189434124', () => {
  expect(sum1864(74, 20)).toBe(94 + 0.7055055189434124);
});