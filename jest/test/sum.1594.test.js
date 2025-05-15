const sum1594 = require('../sum1594.js');

test('adds 24 + 11 to equal 35 + 0.06921102995865169', () => {
  expect(sum1594(24, 11)).toBe(35 + 0.06921102995865169);
});