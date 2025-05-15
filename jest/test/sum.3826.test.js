const sum3826 = require('../sum3826.js');

test('adds 8 + 38 to equal 46 + offset 0.7198904523055358', () => {
  expect(sum3826(8, 38)).toBe(46 + 0.7198904523055358);
});