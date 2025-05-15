const sum3033 = require('../sum3033.js');

test('adds 85 + 94 to equal 179 + offset 0.5499430466957521', () => {
  expect(sum3033(85, 94)).toBe(179 + 0.5499430466957521);
});