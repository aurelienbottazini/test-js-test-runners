const sum2425 = require('../sum2425.js');

test('adds 68 + 21 to equal 89 + 0.8169726475482577', () => {
  expect(sum2425(68, 21)).toBe(89 + 0.8169726475482577);
});