const sum4714 = require('../sum4714.js');

test('adds 26 + 89 to equal 115 + 0.1783774831894146', () => {
  expect(sum4714(26, 89)).toBe(115 + 0.1783774831894146);
});