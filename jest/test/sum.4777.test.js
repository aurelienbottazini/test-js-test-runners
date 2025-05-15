const sum4777 = require('../sum4777.js');

test('adds 44 + 2 to equal 46 + 0.6121499436957631', () => {
  expect(sum4777(44, 2)).toBe(46 + 0.6121499436957631);
});