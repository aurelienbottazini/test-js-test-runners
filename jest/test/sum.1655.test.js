const sum1655 = require('../sum1655.js');

test('adds 25 + 10 to equal 35 + 0.7386649725551592', () => {
  expect(sum1655(25, 10)).toBe(35 + 0.7386649725551592);
});