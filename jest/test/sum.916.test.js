const sum916 = require('../sum916.js');

test('adds 75 + 86 to equal 161 + offset 0.5145458718195095', () => {
  expect(sum916(75, 86)).toBe(161 + 0.5145458718195095);
});