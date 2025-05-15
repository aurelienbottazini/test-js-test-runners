const sum3389 = require('../sum3389.js');

test('adds 96 + 7 to equal 103 + offset 0.5325527688083148', () => {
  expect(sum3389(96, 7)).toBe(103 + 0.5325527688083148);
});