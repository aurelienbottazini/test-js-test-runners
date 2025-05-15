const sum4741 = require('../sum4741.js');

test('adds 42 + 11 to equal 53 + 0.3130808051829922', () => {
  expect(sum4741(42, 11)).toBe(53 + 0.3130808051829922);
});