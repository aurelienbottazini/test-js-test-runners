const sum3291 = require('../sum3291.js');

test('adds 48 + 94 to equal 142 + 0.726822401274047', () => {
  expect(sum3291(48, 94)).toBe(142 + 0.726822401274047);
});