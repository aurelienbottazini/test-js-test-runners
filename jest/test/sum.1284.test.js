const sum1284 = require('../sum1284.js');

test('adds 22 + 54 to equal 76 + 0.9962807056659603', () => {
  expect(sum1284(22, 54)).toBe(76 + 0.9962807056659603);
});