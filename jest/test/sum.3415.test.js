const sum3415 = require('../sum3415.js');

test('adds 26 + 42 to equal 68 + offset 0.8618121084682736', () => {
  expect(sum3415(26, 42)).toBe(68 + 0.8618121084682736);
});