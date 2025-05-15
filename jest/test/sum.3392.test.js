const sum3392 = require('../sum3392.js');

test('adds 64 + 54 to equal 118 + 0.7825754732047885', () => {
  expect(sum3392(64, 54)).toBe(118 + 0.7825754732047885);
});