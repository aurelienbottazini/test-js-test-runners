const sum820 = require('../sum820.js');

test('adds 12 + 54 to equal 66 + offset 0.11507660546336917', () => {
  expect(sum820(12, 54)).toBe(66 + 0.11507660546336917);
});