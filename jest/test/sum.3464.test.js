const sum3464 = require('../sum3464.js');

test('adds 24 + 16 to equal 40 + offset 0.6332987199987169', () => {
  expect(sum3464(24, 16)).toBe(40 + 0.6332987199987169);
});