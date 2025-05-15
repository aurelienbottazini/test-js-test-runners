const sum1993 = require('../sum1993.js');

test('adds 4 + 71 to equal 75 + 0.22210794928531408', () => {
  expect(sum1993(4, 71)).toBe(75 + 0.22210794928531408);
});