const sum1077 = require('../sum1077.js');

test('adds 88 + 15 to equal 103 + 0.26879424596421875', () => {
  expect(sum1077(88, 15)).toBe(103 + 0.26879424596421875);
});