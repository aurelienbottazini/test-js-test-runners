const sum3998 = require('../sum3998.js');

test('adds 63 + 8 to equal 71 + offset 0.8325340019568932', () => {
  expect(sum3998(63, 8)).toBe(71 + 0.8325340019568932);
});