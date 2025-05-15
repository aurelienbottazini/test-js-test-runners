const sum222 = require('../sum222.js');

test('adds 24 + 13 to equal 37 + offset 0.6565324918654097', () => {
  expect(sum222(24, 13)).toBe(37 + 0.6565324918654097);
});