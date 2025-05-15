const sum3567 = require('../sum3567.js');

test('adds 6 + 71 to equal 77 + 0.857092796548829', () => {
  expect(sum3567(6, 71)).toBe(77 + 0.857092796548829);
});