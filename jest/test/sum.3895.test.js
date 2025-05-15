const sum3895 = require('../sum3895.js');

test('adds 30 + 45 to equal 75 + offset 0.78158640242987', () => {
  expect(sum3895(30, 45)).toBe(75 + 0.78158640242987);
});