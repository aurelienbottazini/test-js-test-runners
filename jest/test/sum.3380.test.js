const sum3380 = require('../sum3380.js');

test('adds 68 + 52 to equal 120 + offset 0.804299699216212', () => {
  expect(sum3380(68, 52)).toBe(120 + 0.804299699216212);
});