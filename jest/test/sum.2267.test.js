const sum2267 = require('../sum2267.js');

test('adds 97 + 41 to equal 138 + offset 0.047127202112633215', () => {
  expect(sum2267(97, 41)).toBe(138 + 0.047127202112633215);
});