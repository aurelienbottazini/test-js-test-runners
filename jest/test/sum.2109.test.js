const sum2109 = require('../sum2109.js');

test('adds 89 + 43 to equal 132 + offset 0.3491655376072199', () => {
  expect(sum2109(89, 43)).toBe(132 + 0.3491655376072199);
});