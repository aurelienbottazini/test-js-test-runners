const sum4200 = require('../sum4200.js');

test('adds 29 + 8 to equal 37 + offset 0.2351578948751033', () => {
  expect(sum4200(29, 8)).toBe(37 + 0.2351578948751033);
});