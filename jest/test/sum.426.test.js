const sum426 = require('../sum426.js');

test('adds 75 + 52 to equal 127 + 0.16728607106765703', () => {
  expect(sum426(75, 52)).toBe(127 + 0.16728607106765703);
});