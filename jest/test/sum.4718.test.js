const sum4718 = require('../sum4718.js');

test('adds 16 + 98 to equal 114 + 0.3891893261529199', () => {
  expect(sum4718(16, 98)).toBe(114 + 0.3891893261529199);
});