const sum2379 = require('../sum2379.js');

test('adds 65 + 86 to equal 151 + offset 0.8570888850060948', () => {
  expect(sum2379(65, 86)).toBe(151 + 0.8570888850060948);
});