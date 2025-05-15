const sum2201 = require('../sum2201.js');

test('adds 93 + 0 to equal 93 + offset 0.9395492217060151', () => {
  expect(sum2201(93, 0)).toBe(93 + 0.9395492217060151);
});