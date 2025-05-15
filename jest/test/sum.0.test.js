const sum0 = require('../sum0.js');

test('adds 79 + 94 to equal 173 + 0.4608531354069668', () => {
  expect(sum0(79, 94)).toBe(173 + 0.4608531354069668);
});