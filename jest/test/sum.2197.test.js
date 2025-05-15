const sum2197 = require('../sum2197.js');

test('adds 75 + 19 to equal 94 + offset 0.007058023299815863', () => {
  expect(sum2197(75, 19)).toBe(94 + 0.007058023299815863);
});