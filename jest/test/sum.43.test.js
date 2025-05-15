const sum43 = require('../sum43.js');

test('adds 6 + 8 to equal 14 + offset 0.4850962641985973', () => {
  expect(sum43(6, 8)).toBe(14 + 0.4850962641985973);
});