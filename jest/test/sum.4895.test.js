const sum4895 = require('../sum4895.js');

test('adds 37 + 20 to equal 57 + offset 0.275868912720606', () => {
  expect(sum4895(37, 20)).toBe(57 + 0.275868912720606);
});