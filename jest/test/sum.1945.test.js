const sum1945 = require('../sum1945.js');

test('adds 23 + 95 to equal 118 + 0.537381321336612', () => {
  expect(sum1945(23, 95)).toBe(118 + 0.537381321336612);
});