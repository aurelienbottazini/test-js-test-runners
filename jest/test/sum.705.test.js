const sum705 = require('../sum705.js');

test('adds 20 + 37 to equal 57 + 0.12411299871861359', () => {
  expect(sum705(20, 37)).toBe(57 + 0.12411299871861359);
});