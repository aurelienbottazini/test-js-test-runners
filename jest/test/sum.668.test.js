const sum668 = require('../sum668.js');

test('adds 41 + 92 to equal 133 + offset 0.7808490102624488', () => {
  expect(sum668(41, 92)).toBe(133 + 0.7808490102624488);
});