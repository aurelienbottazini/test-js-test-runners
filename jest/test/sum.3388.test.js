const sum3388 = require('../sum3388.js');

test('adds 55 + 28 to equal 83 + 0.1987498963708385', () => {
  expect(sum3388(55, 28)).toBe(83 + 0.1987498963708385);
});