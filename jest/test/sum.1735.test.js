const sum1735 = require('../sum1735.js');

test('adds 61 + 90 to equal 151 + offset 0.7811575762955075', () => {
  expect(sum1735(61, 90)).toBe(151 + 0.7811575762955075);
});