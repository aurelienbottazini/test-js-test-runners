const sum3873 = require('../sum3873.js');

test('adds 76 + 68 to equal 144 + 0.4650030151569712', () => {
  expect(sum3873(76, 68)).toBe(144 + 0.4650030151569712);
});