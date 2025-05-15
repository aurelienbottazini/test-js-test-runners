const sum3635 = require('../sum3635.js');

test('adds 20 + 89 to equal 109 + 0.04917274140644601', () => {
  expect(sum3635(20, 89)).toBe(109 + 0.04917274140644601);
});