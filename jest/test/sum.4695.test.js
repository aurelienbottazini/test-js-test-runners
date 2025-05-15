const sum4695 = require('../sum4695.js');

test('adds 91 + 8 to equal 99 + 0.09572623988375473', () => {
  expect(sum4695(91, 8)).toBe(99 + 0.09572623988375473);
});