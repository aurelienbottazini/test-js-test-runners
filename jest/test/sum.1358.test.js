const sum1358 = require('../sum1358.js');

test('adds 46 + 22 to equal 68 + 0.9506816549090239', () => {
  expect(sum1358(46, 22)).toBe(68 + 0.9506816549090239);
});