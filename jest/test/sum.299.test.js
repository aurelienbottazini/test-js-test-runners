const sum299 = require('../sum299.js');

test('adds 31 + 15 to equal 46 + 0.20006421451518808', () => {
  expect(sum299(31, 15)).toBe(46 + 0.20006421451518808);
});