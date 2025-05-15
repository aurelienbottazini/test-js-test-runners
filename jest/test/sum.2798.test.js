const sum2798 = require('../sum2798.js');

test('adds 46 + 25 to equal 71 + offset 0.017472528904904028', () => {
  expect(sum2798(46, 25)).toBe(71 + 0.017472528904904028);
});