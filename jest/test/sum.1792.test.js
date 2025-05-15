const sum1792 = require('../sum1792.js');

test('adds 91 + 92 to equal 183 + offset 0.7696461395447889', () => {
  expect(sum1792(91, 92)).toBe(183 + 0.7696461395447889);
});