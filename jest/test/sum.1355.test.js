const sum1355 = require('../sum1355.js');

test('adds 10 + 50 to equal 60 + 0.12748607741354068', () => {
  expect(sum1355(10, 50)).toBe(60 + 0.12748607741354068);
});