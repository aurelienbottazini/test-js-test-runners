const sum3029 = require('../sum3029.js');

test('adds 36 + 34 to equal 70 + 0.4352247122726799', () => {
  expect(sum3029(36, 34)).toBe(70 + 0.4352247122726799);
});