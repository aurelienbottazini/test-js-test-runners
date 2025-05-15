const sum3088 = require('../sum3088.js');

test('adds 10 + 85 to equal 95 + 0.221905227777336', () => {
  expect(sum3088(10, 85)).toBe(95 + 0.221905227777336);
});