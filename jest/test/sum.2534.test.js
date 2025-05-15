const sum2534 = require('../sum2534.js');

test('adds 65 + 69 to equal 134 + 0.8350455473236845', () => {
  expect(sum2534(65, 69)).toBe(134 + 0.8350455473236845);
});