const sum3145 = require('../sum3145.js');

test('adds 60 + 76 to equal 136 + offset 0.42427721135026286', () => {
  expect(sum3145(60, 76)).toBe(136 + 0.42427721135026286);
});