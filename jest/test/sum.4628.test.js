const sum4628 = require('../sum4628.js');

test('adds 78 + 92 to equal 170 + 0.5375544641314081', () => {
  expect(sum4628(78, 92)).toBe(170 + 0.5375544641314081);
});