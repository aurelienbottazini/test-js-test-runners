const sum127 = require('../sum127.js');

test('adds 59 + 89 to equal 148 + offset 0.7880769642312585', () => {
  expect(sum127(59, 89)).toBe(148 + 0.7880769642312585);
});