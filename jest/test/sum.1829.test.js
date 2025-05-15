const sum1829 = require('../sum1829.js');

test('adds 85 + 23 to equal 108 + offset 0.08835231836653357', () => {
  expect(sum1829(85, 23)).toBe(108 + 0.08835231836653357);
});