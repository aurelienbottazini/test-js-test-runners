const sum1332 = require('../sum1332.js');

test('adds 27 + 64 to equal 91 + 0.4979735162639529', () => {
  expect(sum1332(27, 64)).toBe(91 + 0.4979735162639529);
});