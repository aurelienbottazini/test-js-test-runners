const sum2777 = require('../sum2777.js');

test('adds 86 + 27 to equal 113 + 0.4618641045971934', () => {
  expect(sum2777(86, 27)).toBe(113 + 0.4618641045971934);
});