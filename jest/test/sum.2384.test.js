const sum2384 = require('../sum2384.js');

test('adds 46 + 99 to equal 145 + 0.2336877222548167', () => {
  expect(sum2384(46, 99)).toBe(145 + 0.2336877222548167);
});