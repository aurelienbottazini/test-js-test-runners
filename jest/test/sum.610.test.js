const sum610 = require('../sum610.js');

test('adds 28 + 94 to equal 122 + 0.8288608104291418', () => {
  expect(sum610(28, 94)).toBe(122 + 0.8288608104291418);
});