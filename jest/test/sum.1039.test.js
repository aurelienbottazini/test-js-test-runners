const sum1039 = require('../sum1039.js');

test('adds 30 + 8 to equal 38 + 0.049628774103185336', () => {
  expect(sum1039(30, 8)).toBe(38 + 0.049628774103185336);
});