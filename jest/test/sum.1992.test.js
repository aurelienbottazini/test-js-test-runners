const sum1992 = require('../sum1992.js');

test('adds 43 + 56 to equal 99 + 0.8480059170982789', () => {
  expect(sum1992(43, 56)).toBe(99 + 0.8480059170982789);
});