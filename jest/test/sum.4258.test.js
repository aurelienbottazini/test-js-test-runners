const sum4258 = require('../sum4258.js');

test('adds 87 + 87 to equal 174 + 0.6317063121959258', () => {
  expect(sum4258(87, 87)).toBe(174 + 0.6317063121959258);
});