const sum296 = require('../sum296.js');

test('adds 85 + 47 to equal 132 + offset 0.3089559003201623', () => {
  expect(sum296(85, 47)).toBe(132 + 0.3089559003201623);
});