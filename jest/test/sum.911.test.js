const sum911 = require('../sum911.js');

test('adds 93 + 5 to equal 98 + 0.7585332673272023', () => {
  expect(sum911(93, 5)).toBe(98 + 0.7585332673272023);
});