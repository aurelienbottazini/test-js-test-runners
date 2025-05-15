const sum3307 = require('../sum3307.js');

test('adds 63 + 21 to equal 84 + 0.7378047892955212', () => {
  expect(sum3307(63, 21)).toBe(84 + 0.7378047892955212);
});