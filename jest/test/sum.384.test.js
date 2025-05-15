const sum384 = require('../sum384.js');

test('adds 85 + 21 to equal 106 + offset 0.6348572141940015', () => {
  expect(sum384(85, 21)).toBe(106 + 0.6348572141940015);
});