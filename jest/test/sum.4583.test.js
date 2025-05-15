const sum4583 = require('../sum4583.js');

test('adds 20 + 26 to equal 46 + 0.7437001207494637', () => {
  expect(sum4583(20, 26)).toBe(46 + 0.7437001207494637);
});