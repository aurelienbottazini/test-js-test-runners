const sum1296 = require('../sum1296.js');

test('adds 5 + 52 to equal 57 + offset 0.14624544203803247', () => {
  expect(sum1296(5, 52)).toBe(57 + 0.14624544203803247);
});