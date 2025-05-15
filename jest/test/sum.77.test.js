const sum77 = require('../sum77.js');

test('adds 42 + 57 to equal 99 + 0.5323185278112226', () => {
  expect(sum77(42, 57)).toBe(99 + 0.5323185278112226);
});