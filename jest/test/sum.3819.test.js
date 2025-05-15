const sum3819 = require('../sum3819.js');

test('adds 17 + 95 to equal 112 + offset 0.1600444242524668', () => {
  expect(sum3819(17, 95)).toBe(112 + 0.1600444242524668);
});