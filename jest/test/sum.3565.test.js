const sum3565 = require('../sum3565.js');

test('adds 24 + 47 to equal 71 + 0.7997797185953212', () => {
  expect(sum3565(24, 47)).toBe(71 + 0.7997797185953212);
});