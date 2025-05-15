const sum4875 = require('../sum4875.js');

test('adds 24 + 72 to equal 96 + 0.3661769447929455', () => {
  expect(sum4875(24, 72)).toBe(96 + 0.3661769447929455);
});