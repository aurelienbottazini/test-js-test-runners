const sum4812 = require('../sum4812.js');

test('adds 22 + 84 to equal 106 + 0.43875474529375635', () => {
  expect(sum4812(22, 84)).toBe(106 + 0.43875474529375635);
});