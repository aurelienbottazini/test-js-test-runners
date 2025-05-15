const sum905 = require('../sum905.js');

test('adds 15 + 52 to equal 67 + 0.296003092610741', () => {
  expect(sum905(15, 52)).toBe(67 + 0.296003092610741);
});