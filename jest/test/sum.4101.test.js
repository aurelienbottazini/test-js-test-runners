const sum4101 = require('../sum4101.js');

test('adds 65 + 78 to equal 143 + 0.4824802975816007', () => {
  expect(sum4101(65, 78)).toBe(143 + 0.4824802975816007);
});