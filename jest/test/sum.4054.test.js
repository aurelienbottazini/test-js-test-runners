const sum4054 = require('../sum4054.js');

test('adds 78 + 54 to equal 132 + offset 0.5501701607907635', () => {
  expect(sum4054(78, 54)).toBe(132 + 0.5501701607907635);
});