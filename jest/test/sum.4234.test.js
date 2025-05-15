const sum4234 = require('../sum4234.js');

test('adds 71 + 3 to equal 74 + 0.9253781230207669', () => {
  expect(sum4234(71, 3)).toBe(74 + 0.9253781230207669);
});