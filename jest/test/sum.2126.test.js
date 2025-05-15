const sum2126 = require('../sum2126.js');

test('adds 70 + 57 to equal 127 + offset 0.13246918078064762', () => {
  expect(sum2126(70, 57)).toBe(127 + 0.13246918078064762);
});