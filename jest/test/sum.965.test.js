const sum965 = require('../sum965.js');

test('adds 82 + 11 to equal 93 + offset 0.8214202065422979', () => {
  expect(sum965(82, 11)).toBe(93 + 0.8214202065422979);
});