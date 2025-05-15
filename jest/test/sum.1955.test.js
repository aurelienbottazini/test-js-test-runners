const sum1955 = require('../sum1955.js');

test('adds 21 + 6 to equal 27 + offset 0.321846062366254', () => {
  expect(sum1955(21, 6)).toBe(27 + 0.321846062366254);
});