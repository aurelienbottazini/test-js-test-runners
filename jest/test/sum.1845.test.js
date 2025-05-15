const sum1845 = require('../sum1845.js');

test('adds 38 + 55 to equal 93 + offset 0.6335130105181632', () => {
  expect(sum1845(38, 55)).toBe(93 + 0.6335130105181632);
});