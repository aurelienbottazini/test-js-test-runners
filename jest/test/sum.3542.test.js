const sum3542 = require('../sum3542.js');

test('adds 5 + 95 to equal 100 + 0.86109020064392', () => {
  expect(sum3542(5, 95)).toBe(100 + 0.86109020064392);
});