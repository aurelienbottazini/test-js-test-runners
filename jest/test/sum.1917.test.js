const sum1917 = require('../sum1917.js');

test('adds 19 + 49 to equal 68 + 0.6274485497298151', () => {
  expect(sum1917(19, 49)).toBe(68 + 0.6274485497298151);
});