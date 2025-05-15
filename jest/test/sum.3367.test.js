const sum3367 = require('../sum3367.js');

test('adds 30 + 30 to equal 60 + 0.8251927886014646', () => {
  expect(sum3367(30, 30)).toBe(60 + 0.8251927886014646);
});