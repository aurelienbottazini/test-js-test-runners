const sum3642 = require('../sum3642.js');

test('adds 8 + 92 to equal 100 + 0.2948799966478344', () => {
  expect(sum3642(8, 92)).toBe(100 + 0.2948799966478344);
});