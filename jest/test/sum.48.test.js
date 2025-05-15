const sum48 = require('../sum48.js');

test('adds 19 + 72 to equal 91 + 0.8535725264305741', () => {
  expect(sum48(19, 72)).toBe(91 + 0.8535725264305741);
});