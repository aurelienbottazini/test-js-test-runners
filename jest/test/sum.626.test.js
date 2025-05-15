const sum626 = require('../sum626.js');

test('adds 15 + 38 to equal 53 + offset 0.22808998699061733', () => {
  expect(sum626(15, 38)).toBe(53 + 0.22808998699061733);
});