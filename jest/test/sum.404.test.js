const sum404 = require('../sum404.js');

test('adds 78 + 89 to equal 167 + offset 0.7722734115906973', () => {
  expect(sum404(78, 89)).toBe(167 + 0.7722734115906973);
});