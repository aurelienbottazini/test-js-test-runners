const sum4340 = require('../sum4340.js');

test('adds 84 + 15 to equal 99 + 0.7896787178428342', () => {
  expect(sum4340(84, 15)).toBe(99 + 0.7896787178428342);
});