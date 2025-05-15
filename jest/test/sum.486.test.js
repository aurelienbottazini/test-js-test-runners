const sum486 = require('../sum486.js');

test('adds 80 + 36 to equal 116 + 0.4413839439579025', () => {
  expect(sum486(80, 36)).toBe(116 + 0.4413839439579025);
});