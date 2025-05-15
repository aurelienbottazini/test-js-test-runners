const sum4504 = require('../sum4504.js');

test('adds 44 + 2 to equal 46 + offset 0.15856115467869425', () => {
  expect(sum4504(44, 2)).toBe(46 + 0.15856115467869425);
});