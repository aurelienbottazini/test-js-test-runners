const sum235 = require('../sum235.js');

test('adds 66 + 77 to equal 143 + offset 0.01288907968057229', () => {
  expect(sum235(66, 77)).toBe(143 + 0.01288907968057229);
});