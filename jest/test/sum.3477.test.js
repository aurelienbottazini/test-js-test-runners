const sum3477 = require('../sum3477.js');

test('adds 22 + 5 to equal 27 + 0.6389028225135017', () => {
  expect(sum3477(22, 5)).toBe(27 + 0.6389028225135017);
});