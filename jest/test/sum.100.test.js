const sum100 = require('../sum100.js');

test('adds 46 + 62 to equal 108 + 0.6602855317458344', () => {
  expect(sum100(46, 62)).toBe(108 + 0.6602855317458344);
});