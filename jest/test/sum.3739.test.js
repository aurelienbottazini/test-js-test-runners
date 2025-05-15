const sum3739 = require('../sum3739.js');

test('adds 9 + 52 to equal 61 + offset 0.6618148354252454', () => {
  expect(sum3739(9, 52)).toBe(61 + 0.6618148354252454);
});