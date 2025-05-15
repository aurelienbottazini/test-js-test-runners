const sum4174 = require('../sum4174.js');

test('adds 46 + 35 to equal 81 + offset 0.2741376664075621', () => {
  expect(sum4174(46, 35)).toBe(81 + 0.2741376664075621);
});