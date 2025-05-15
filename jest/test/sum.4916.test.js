const sum4916 = require('../sum4916.js');

test('adds 18 + 26 to equal 44 + offset 0.7646872619033166', () => {
  expect(sum4916(18, 26)).toBe(44 + 0.7646872619033166);
});