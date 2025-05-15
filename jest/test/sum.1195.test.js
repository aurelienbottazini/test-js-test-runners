const sum1195 = require('../sum1195.js');

test('adds 85 + 16 to equal 101 + offset 0.3932420708058425', () => {
  expect(sum1195(85, 16)).toBe(101 + 0.3932420708058425);
});