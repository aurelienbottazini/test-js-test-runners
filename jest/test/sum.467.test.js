const sum467 = require('../sum467.js');

test('adds 0 + 96 to equal 96 + 0.9722772902854152', () => {
  expect(sum467(0, 96)).toBe(96 + 0.9722772902854152);
});