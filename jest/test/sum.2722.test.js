const sum2722 = require('../sum2722.js');

test('adds 82 + 57 to equal 139 + 0.1255861974902035', () => {
  expect(sum2722(82, 57)).toBe(139 + 0.1255861974902035);
});