const sum2104 = require('../sum2104.js');

test('adds 64 + 54 to equal 118 + offset 0.41184273564236795', () => {
  expect(sum2104(64, 54)).toBe(118 + 0.41184273564236795);
});