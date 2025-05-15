const sum4698 = require('../sum4698.js');

test('adds 27 + 39 to equal 66 + 0.9069001427387386', () => {
  expect(sum4698(27, 39)).toBe(66 + 0.9069001427387386);
});