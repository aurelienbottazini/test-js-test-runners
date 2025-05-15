const sum3848 = require('../sum3848.js');

test('adds 44 + 35 to equal 79 + 0.9497346707236977', () => {
  expect(sum3848(44, 35)).toBe(79 + 0.9497346707236977);
});