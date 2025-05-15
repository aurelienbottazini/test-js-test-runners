const sum3116 = require('../sum3116.js');

test('adds 25 + 54 to equal 79 + 0.32305426863481', () => {
  expect(sum3116(25, 54)).toBe(79 + 0.32305426863481);
});