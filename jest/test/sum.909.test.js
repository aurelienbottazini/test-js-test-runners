const sum909 = require('../sum909.js');

test('adds 3 + 77 to equal 80 + 0.6858716461473658', () => {
  expect(sum909(3, 77)).toBe(80 + 0.6858716461473658);
});