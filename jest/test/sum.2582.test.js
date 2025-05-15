const sum2582 = require('../sum2582.js');

test('adds 25 + 59 to equal 84 + offset 0.3444059558057432', () => {
  expect(sum2582(25, 59)).toBe(84 + 0.3444059558057432);
});