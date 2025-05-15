const sum3444 = require('../sum3444.js');

test('adds 12 + 69 to equal 81 + 0.3467262940129525', () => {
  expect(sum3444(12, 69)).toBe(81 + 0.3467262940129525);
});