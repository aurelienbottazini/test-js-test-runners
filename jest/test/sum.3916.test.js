const sum3916 = require('../sum3916.js');

test('adds 45 + 29 to equal 74 + 0.7297170773329451', () => {
  expect(sum3916(45, 29)).toBe(74 + 0.7297170773329451);
});