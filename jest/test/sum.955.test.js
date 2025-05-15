const sum955 = require('../sum955.js');

test('adds 54 + 17 to equal 71 + offset 0.36936402284148573', () => {
  expect(sum955(54, 17)).toBe(71 + 0.36936402284148573);
});