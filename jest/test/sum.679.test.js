const sum679 = require('../sum679.js');

test('adds 74 + 23 to equal 97 + offset 0.8334190041029956', () => {
  expect(sum679(74, 23)).toBe(97 + 0.8334190041029956);
});