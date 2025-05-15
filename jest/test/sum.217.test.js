const sum217 = require('../sum217.js');

test('adds 45 + 62 to equal 107 + offset 0.04165421476989639', () => {
  expect(sum217(45, 62)).toBe(107 + 0.04165421476989639);
});