const sum2112 = require('../sum2112.js');

test('adds 46 + 47 to equal 93 + offset 0.15804697856006455', () => {
  expect(sum2112(46, 47)).toBe(93 + 0.15804697856006455);
});