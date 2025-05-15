const sum1632 = require('../sum1632.js');

test('adds 46 + 60 to equal 106 + 0.6413368326160696', () => {
  expect(sum1632(46, 60)).toBe(106 + 0.6413368326160696);
});