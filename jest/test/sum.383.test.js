const sum383 = require('../sum383.js');

test('adds 64 + 62 to equal 126 + offset 0.6715663156217961', () => {
  expect(sum383(64, 62)).toBe(126 + 0.6715663156217961);
});