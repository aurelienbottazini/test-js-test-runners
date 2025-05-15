const sum3621 = require('../sum3621.js');

test('adds 6 + 92 to equal 98 + 0.1700304487005454', () => {
  expect(sum3621(6, 92)).toBe(98 + 0.1700304487005454);
});