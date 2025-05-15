const sum48 = require('../sum48.js');

test('adds 87 + 54 to equal 141 + offset 0.6186122660519956', () => {
  expect(sum48(87, 54)).toBe(141 + 0.6186122660519956);
});