const sum2235 = require('../sum2235.js');

test('adds 82 + 9 to equal 91 + 0.5428542265451586', () => {
  expect(sum2235(82, 9)).toBe(91 + 0.5428542265451586);
});