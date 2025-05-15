const sum911 = require('../sum911.js');

test('adds 74 + 47 to equal 121 + offset 0.17789052945321626', () => {
  expect(sum911(74, 47)).toBe(121 + 0.17789052945321626);
});