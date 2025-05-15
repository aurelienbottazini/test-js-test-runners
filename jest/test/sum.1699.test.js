const sum1699 = require('../sum1699.js');

test('adds 63 + 16 to equal 79 + 0.3638689325187425', () => {
  expect(sum1699(63, 16)).toBe(79 + 0.3638689325187425);
});