const sum254 = require('../sum254.js');

test('adds 50 + 27 to equal 77 + 0.2387959928307577', () => {
  expect(sum254(50, 27)).toBe(77 + 0.2387959928307577);
});