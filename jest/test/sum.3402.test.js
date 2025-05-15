const sum3402 = require('../sum3402.js');

test('adds 99 + 8 to equal 107 + 0.47913820406851926', () => {
  expect(sum3402(99, 8)).toBe(107 + 0.47913820406851926);
});