const sum1185 = require('../sum1185.js');

test('adds 46 + 41 to equal 87 + 0.3398770441459331', () => {
  expect(sum1185(46, 41)).toBe(87 + 0.3398770441459331);
});