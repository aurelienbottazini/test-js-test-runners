const sum1327 = require('../sum1327.js');

test('adds 6 + 71 to equal 77 + offset 0.19520492446927706', () => {
  expect(sum1327(6, 71)).toBe(77 + 0.19520492446927706);
});