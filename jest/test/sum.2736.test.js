const sum2736 = require('../sum2736.js');

test('adds 43 + 49 to equal 92 + offset 0.7998407919249112', () => {
  expect(sum2736(43, 49)).toBe(92 + 0.7998407919249112);
});