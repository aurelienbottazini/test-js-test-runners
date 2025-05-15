const sum1611 = require('../sum1611.js');

test('adds 46 + 60 to equal 106 + 0.7144780580132143', () => {
  expect(sum1611(46, 60)).toBe(106 + 0.7144780580132143);
});