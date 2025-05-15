const sum3923 = require('../sum3923.js');

test('adds 24 + 9 to equal 33 + offset 0.9536946800500212', () => {
  expect(sum3923(24, 9)).toBe(33 + 0.9536946800500212);
});