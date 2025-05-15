const sum1888 = require('../sum1888.js');

test('adds 69 + 43 to equal 112 + 0.10872015674414437', () => {
  expect(sum1888(69, 43)).toBe(112 + 0.10872015674414437);
});