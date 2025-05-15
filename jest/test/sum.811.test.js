const sum811 = require('../sum811.js');

test('adds 57 + 45 to equal 102 + 0.6774199354938915', () => {
  expect(sum811(57, 45)).toBe(102 + 0.6774199354938915);
});