const sum810 = require('../sum810.js');

test('adds 54 + 15 to equal 69 + offset 0.03334602326685665', () => {
  expect(sum810(54, 15)).toBe(69 + 0.03334602326685665);
});