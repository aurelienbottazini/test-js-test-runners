const sum2810 = require('../sum2810.js');

test('adds 64 + 33 to equal 97 + 0.05869448140792344', () => {
  expect(sum2810(64, 33)).toBe(97 + 0.05869448140792344);
});