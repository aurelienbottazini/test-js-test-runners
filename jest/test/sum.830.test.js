const sum830 = require('../sum830.js');

test('adds 87 + 93 to equal 180 + 0.522327134874161', () => {
  expect(sum830(87, 93)).toBe(180 + 0.522327134874161);
});