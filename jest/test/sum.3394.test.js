const sum3394 = require('../sum3394.js');

test('adds 24 + 11 to equal 35 + 0.8786960545980563', () => {
  expect(sum3394(24, 11)).toBe(35 + 0.8786960545980563);
});