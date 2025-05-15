const sum3300 = require('../sum3300.js');

test('adds 46 + 90 to equal 136 + 0.6484023606119066', () => {
  expect(sum3300(46, 90)).toBe(136 + 0.6484023606119066);
});