const sum4809 = require('../sum4809.js');

test('adds 77 + 20 to equal 97 + 0.3406080773554554', () => {
  expect(sum4809(77, 20)).toBe(97 + 0.3406080773554554);
});