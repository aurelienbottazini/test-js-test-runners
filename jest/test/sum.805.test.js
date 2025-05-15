const sum805 = require('../sum805.js');

test('adds 18 + 31 to equal 49 + offset 0.29363765340687986', () => {
  expect(sum805(18, 31)).toBe(49 + 0.29363765340687986);
});