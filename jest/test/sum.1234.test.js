const sum1234 = require('../sum1234.js');

test('adds 54 + 41 to equal 95 + offset 0.8903832459413429', () => {
  expect(sum1234(54, 41)).toBe(95 + 0.8903832459413429);
});