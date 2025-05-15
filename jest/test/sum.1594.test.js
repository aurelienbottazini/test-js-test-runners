const sum1594 = require('../sum1594.js');

test('adds 68 + 51 to equal 119 + offset 0.8412169088346259', () => {
  expect(sum1594(68, 51)).toBe(119 + 0.8412169088346259);
});