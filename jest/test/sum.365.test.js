const sum365 = require('../sum365.js');

test('adds 82 + 90 to equal 172 + offset 0.3122106174639492', () => {
  expect(sum365(82, 90)).toBe(172 + 0.3122106174639492);
});