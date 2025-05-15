const sum902 = require('../sum902.js');

test('adds 46 + 93 to equal 139 + 0.7745798076785573', () => {
  expect(sum902(46, 93)).toBe(139 + 0.7745798076785573);
});