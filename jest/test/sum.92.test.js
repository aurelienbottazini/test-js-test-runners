const sum92 = require('../sum92.js');

test('adds 22 + 53 to equal 75 + 0.4835601791361358', () => {
  expect(sum92(22, 53)).toBe(75 + 0.4835601791361358);
});