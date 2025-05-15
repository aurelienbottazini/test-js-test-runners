const sum3990 = require('../sum3990.js');

test('adds 38 + 15 to equal 53 + 0.8827011158746222', () => {
  expect(sum3990(38, 15)).toBe(53 + 0.8827011158746222);
});