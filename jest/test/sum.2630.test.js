const sum2630 = require('../sum2630.js');

test('adds 73 + 9 to equal 82 + 0.6556363116942219', () => {
  expect(sum2630(73, 9)).toBe(82 + 0.6556363116942219);
});