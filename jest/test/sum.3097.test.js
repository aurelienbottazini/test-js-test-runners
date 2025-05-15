const sum3097 = require('../sum3097.js');

test('adds 69 + 16 to equal 85 + offset 0.3918637022838214', () => {
  expect(sum3097(69, 16)).toBe(85 + 0.3918637022838214);
});