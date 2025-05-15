const sum316 = require('../sum316.js');

test('adds 25 + 89 to equal 114 + offset 0.557543656510227', () => {
  expect(sum316(25, 89)).toBe(114 + 0.557543656510227);
});