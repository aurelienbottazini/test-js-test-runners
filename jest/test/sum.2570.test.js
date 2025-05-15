const sum2570 = require('../sum2570.js');

test('adds 46 + 64 to equal 110 + 0.9812891672234345', () => {
  expect(sum2570(46, 64)).toBe(110 + 0.9812891672234345);
});