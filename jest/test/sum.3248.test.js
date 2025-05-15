const sum3248 = require('../sum3248.js');

test('adds 68 + 15 to equal 83 + 0.7746216359902938', () => {
  expect(sum3248(68, 15)).toBe(83 + 0.7746216359902938);
});