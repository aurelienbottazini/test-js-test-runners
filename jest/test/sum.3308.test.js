const sum3308 = require('../sum3308.js');

test('adds 39 + 7 to equal 46 + 0.9244477284083618', () => {
  expect(sum3308(39, 7)).toBe(46 + 0.9244477284083618);
});