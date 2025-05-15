const sum3922 = require('../sum3922.js');

test('adds 43 + 45 to equal 88 + offset 0.8647198412931963', () => {
  expect(sum3922(43, 45)).toBe(88 + 0.8647198412931963);
});