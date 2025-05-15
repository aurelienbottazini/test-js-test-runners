const sum2000 = require('../sum2000.js');

test('adds 45 + 98 to equal 143 + 0.10687227014103862', () => {
  expect(sum2000(45, 98)).toBe(143 + 0.10687227014103862);
});