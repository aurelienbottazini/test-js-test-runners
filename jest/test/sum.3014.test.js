const sum3014 = require('../sum3014.js');

test('adds 90 + 95 to equal 185 + offset 0.5698794771333668', () => {
  expect(sum3014(90, 95)).toBe(185 + 0.5698794771333668);
});