const sum840 = require('../sum840.js');

test('adds 94 + 92 to equal 186 + 0.0028022659964205276', () => {
  expect(sum840(94, 92)).toBe(186 + 0.0028022659964205276);
});