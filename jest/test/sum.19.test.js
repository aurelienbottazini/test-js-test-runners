const sum19 = require('../sum19.js');

test('adds 21 + 54 to equal 75 + 0.21424991391079073', () => {
  expect(sum19(21, 54)).toBe(75 + 0.21424991391079073);
});