const sum85 = require('../sum85.js');

test('adds 14 + 76 to equal 90 + offset 0.9537461966039565', () => {
  expect(sum85(14, 76)).toBe(90 + 0.9537461966039565);
});