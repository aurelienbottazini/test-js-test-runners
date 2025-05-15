const sum4257 = require('../sum4257.js');

test('adds 77 + 37 to equal 114 + 0.9634315148894038', () => {
  expect(sum4257(77, 37)).toBe(114 + 0.9634315148894038);
});