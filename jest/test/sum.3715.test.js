const sum3715 = require('../sum3715.js');

test('adds 36 + 20 to equal 56 + 0.2084962567656321', () => {
  expect(sum3715(36, 20)).toBe(56 + 0.2084962567656321);
});