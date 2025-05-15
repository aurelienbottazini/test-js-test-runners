const sum2721 = require('../sum2721.js');

test('adds 93 + 69 to equal 162 + offset 0.24377863225172403', () => {
  expect(sum2721(93, 69)).toBe(162 + 0.24377863225172403);
});