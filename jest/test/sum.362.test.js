const sum362 = require('../sum362.js');

test('adds 73 + 71 to equal 144 + 0.673384516178999', () => {
  expect(sum362(73, 71)).toBe(144 + 0.673384516178999);
});