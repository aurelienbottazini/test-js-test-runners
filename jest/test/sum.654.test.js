const sum654 = require('../sum654.js');

test('adds 27 + 90 to equal 117 + 0.5530829579762612', () => {
  expect(sum654(27, 90)).toBe(117 + 0.5530829579762612);
});