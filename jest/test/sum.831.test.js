const sum831 = require('../sum831.js');

test('adds 18 + 76 to equal 94 + offset 0.405546373106737', () => {
  expect(sum831(18, 76)).toBe(94 + 0.405546373106737);
});