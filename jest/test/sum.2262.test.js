const sum2262 = require('../sum2262.js');

test('adds 19 + 89 to equal 108 + offset 0.1297247363134486', () => {
  expect(sum2262(19, 89)).toBe(108 + 0.1297247363134486);
});