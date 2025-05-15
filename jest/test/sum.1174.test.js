const sum1174 = require('../sum1174.js');

test('adds 33 + 64 to equal 97 + offset 0.3084119252151418', () => {
  expect(sum1174(33, 64)).toBe(97 + 0.3084119252151418);
});