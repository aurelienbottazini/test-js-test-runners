const sum2891 = require('../sum2891.js');

test('adds 84 + 15 to equal 99 + offset 0.02685331835366722', () => {
  expect(sum2891(84, 15)).toBe(99 + 0.02685331835366722);
});