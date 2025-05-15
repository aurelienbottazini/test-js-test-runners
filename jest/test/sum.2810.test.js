const sum2810 = require('../sum2810.js');

test('adds 45 + 85 to equal 130 + offset 0.14383525170675393', () => {
  expect(sum2810(45, 85)).toBe(130 + 0.14383525170675393);
});