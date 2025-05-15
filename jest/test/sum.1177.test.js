const sum1177 = require('../sum1177.js');

test('adds 32 + 79 to equal 111 + 0.15616854735216557', () => {
  expect(sum1177(32, 79)).toBe(111 + 0.15616854735216557);
});