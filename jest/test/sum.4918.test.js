const sum4918 = require('../sum4918.js');

test('adds 23 + 78 to equal 101 + 0.8231921350169419', () => {
  expect(sum4918(23, 78)).toBe(101 + 0.8231921350169419);
});