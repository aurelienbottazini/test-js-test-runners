const sum709 = require('../sum709.js');

test('adds 74 + 78 to equal 152 + offset 0.3504677024921754', () => {
  expect(sum709(74, 78)).toBe(152 + 0.3504677024921754);
});