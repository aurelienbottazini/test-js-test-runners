const sum2042 = require('../sum2042.js');

test('adds 48 + 65 to equal 113 + 0.9695204704468952', () => {
  expect(sum2042(48, 65)).toBe(113 + 0.9695204704468952);
});