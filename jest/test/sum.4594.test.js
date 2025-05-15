const sum4594 = require('../sum4594.js');

test('adds 36 + 77 to equal 113 + offset 0.052136491551800224', () => {
  expect(sum4594(36, 77)).toBe(113 + 0.052136491551800224);
});