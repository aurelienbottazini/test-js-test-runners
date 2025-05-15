const sum802 = require('../sum802.js');

test('adds 52 + 78 to equal 130 + offset 0.7301061110840185', () => {
  expect(sum802(52, 78)).toBe(130 + 0.7301061110840185);
});