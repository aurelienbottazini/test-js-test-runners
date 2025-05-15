const sum4431 = require('../sum4431.js');

test('adds 68 + 40 to equal 108 + offset 0.11020038473274629', () => {
  expect(sum4431(68, 40)).toBe(108 + 0.11020038473274629);
});